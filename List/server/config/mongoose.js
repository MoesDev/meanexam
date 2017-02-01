var mongoose = require( 'mongoose' ),
	fs = require('fs'),
	path = require('path');

dataBaseMongodb = 'mongodb://localhost/theList';

mongoose.connect(dataBaseMongodb);

// *  CONNECTION EVENTS
// *  When successfully connected

mongoose.connection.on( 'connected', function () {
  console.log( `Mongoose default connection open to ${ dataBaseMongodb }` );
});
/*
*  If the connection throws an error
*/
mongoose.connection.on( 'error', function ( err ) {
  console.error( `Mongoose default connection error: ${ err }` );
});
/*
*  When the connection is disconnected
*/
mongoose.connection.on( 'disconnected', function () {
  console.log( 'Mongoose default connection disconnected' );
});

 // If the Node process ends, close the Mongoose connection

process.on( 'SIGINT', function() {
  mongoose.connection.close( function () {
    console.log( 'Mongoose default connection disconnected through app termination' );
    process.exit( 0 );
  });
});


//*****Checks in model folder for .js files so all Model files are available********

var models_path = path.join(__dirname, "./../models");

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('js') >=0){
		require(models_path + '/' + file);
	}
})