const Multer = require( 'multer' );
const multer = Multer( {
    storage: Multer.diskStorage( {
        destination: ( req, file, callback ) => {
            callback( null, './public/avatares' );//destino de las imágenes
        },
        filename: ( req, file, callback ) => {
            callback( null, Date.now() + '-' + file.originalname ); //nombre del archivo a almacenar ej: 1568189496577-pepe.png,1568189496877-.pepe.png
        },
    } ),
    fileFilter: ( req, file, callback ) => {
        const validMimeTypes = [ 'image/png', 'image/jpg', 'image/jpeg' ]
        if ( validMimeTypes.includes(file.mimetype) ) {
            callback( null, true )
        } else {
            callback( 'solo puedes subir png, jpg o jpeg', false )
        }
    },
    limits: { fileSize: 6 * 1024 * 1024 }
} );

module.exports = multer;
