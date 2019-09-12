require('./config/mongoose.js');
const express = require( 'express' );
const app = express();
const morgan=require('morgan');
const winston=require('./config/winston.js');
const userRouter=require('./routes/users.js');
const port= proccess.env.PORT || 3001;
// app.use( function ( req, res, next ) {
//     res.header( "Access-Control-Allow-Origin", "*" );
//     res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
//     next();
// } );
app.use(morgan('combined',{ stream: winston.stream }));
app.use( express.json() ); //parsea de JSON el body de la petición 

app.use('/user',userRouter)
app.listen( port, () => console.log( 'servidor levantado en el puerto '+port ) )