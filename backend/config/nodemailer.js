const nodeMailer = require( 'nodemailer' );
const { GMAIL } = require( './password.js' )
const transporter = nodeMailer.createTransport( {
    service: 'Gmail',
    auth: {
        user: GMAIL.email,
        pass: GMAIL.password
    }
}, );
module.exports =transporter;