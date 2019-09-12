const mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost:27017/usuario', { useNewUrlParser: true, useCreateIndex: true } )
.then( () => console.log( 'conexión con MongoDB establecida con éxito' ) )
.catch( error => console.log( 'Error al conectar a MongoDB: ' + error ) )