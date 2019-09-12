const router = require( 'express' ).Router();
const UserModel = require( '../models/User' );
const bcrypt = require( 'bcrypt' );
const jwt = require( 'jsonwebtoken' );
const { SECRET_JWT, SECRET_EMAIL_JWT } = require( '../config/password.js' );
const transporter = require( '../config/nodemailer.js' );
const isAuthenticated = require( '../middleware/authentication' );
const upload = require( '../config/multer.js' )
router.get( '/', ( req, res ) => { //READ
    UserModel.find( {} ).then( users => res.send( users ) ).catch( console.log )
} );

router.post( '/signup', async ( req, res ) => { //CREATE
    try {
        const user = await new UserModel( {
            ...req.body,
            confirmedEmail: false,
        } ).save();
        const emailToken = jwt.sign( { email: user.email }, SECRET_EMAIL_JWT, { expiresIn: '2d' } )
        const url = 'http://localhost:3000/user/confirmEmail/' + emailToken
        await transporter.sendMail( { //enviamos el email con la siguiente información:
            to: user.email, // destinatario del email
            subject: "Active su cuenta en nuestra web de viajes", //asunto del email
            html: `  
                    <h1 >Bienvenido a nuestra web de viajes</h1>
                    <p>Porfavor, active su cuenta clicando el siguiente link:
                        <a href="${url}">
                            Click aquí para activar tu cuenta
                        </a>
                    </p>
                    <b>Este link se caducará en 48 horas </b> ` //mensaje en HTML que enviamos al destinatario
        } )
        transporter.close();
        res.send( user );
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).send( 'Ha habido un problema al registrar el usuario' );
    }
} )
router.get( '/confirmEmail/:emailToken', async ( req, res ) => {
    try {
        const token = req.params.emailToken; //sacamos el token de la url
        const email = jwt.verify( token, SECRET_EMAIL_JWT ).email; //sacamos el email del token
        await UserModel.findOneAndUpdate( { email }, { confirmedEmail: true } ) //actualizamos el usuario a email confirmado
        res.send( 'usuario activado' ); //le decimos que el usuario ya esta activado
    } catch ( error ) {
        console.log( error );
        res.status( 401 ).send( error )
    }
} )
router.post( '/login', async ( req, res ) => {
    try {
        const user = await UserModel.findOne( {
            $or: [ { usuario: req.body.usuario }, { email: req.body.email } ]
        } );
        if ( !user ) return res.status( 400 ).send( 'Usuario o contraseña incorrectos' );
        const isMatch = await bcrypt.compare( req.body.password, user.password )
        if ( !isMatch ) return res.status( 400 ).send( 'Usuario o contraseña incorrectos' );
        if ( !user.confirmedEmail ) res.status( 400 ).send( 'Debes confirmar tu email' );
        const token = await jwt.sign( { _id: user._id }, SECRET_JWT, { expiresIn: '7d' } );
        user.tokens.push( token )
        user.save()
        res.json( { user, token } );
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).send( 'ha habido un problema con el servidor' )
    }
} )

router.patch( '/', isAuthenticated, upload.single( 'avatar' ), async ( req, res ) => {
    try {
        const userData = { ...req.body }
        if ( req.file ) userData.imagePath = req.file.filename;
        if ( req.body.password ) userData.password = await bcrypt.hash( req.body.password, 10 );
        const user = await UserModel.findByIdAndUpdate( req.user._id, userData, { new: true, useFindAndModify: false } )
        res.send( user )
    } catch ( error ) {
        console.log( error );
        res.send( 'Ha habido un error al tratar de actualizar el usuario' )
    }
} )
router.delete( '/', isAuthenticated, async ( req, res ) => {
    try {
        const user = await UserModel.findByIdAndDelete( req.user._id )
        res.send( user )
    } catch ( error ) {
        console.log( error );
    }
} )
module.exports = router;
