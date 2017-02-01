var express  = require( 'express' ),
    bodyParser = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();

// using bdyParser to pass json files
app.use(bodyParser.json());

//using bodyParser to pass params (parameters for routing)
app.use(bodyParser.urlencoded({extended: true}));

// ***** Use Client Folder & Bower ***
app.use( express.static( path.join( root, './client' )));
app.use( express.static( path.join( root, './bower_components' )));


// require *******Server Folder Files ****
require('./server/config/mongoose.js' );
// pass the variable app to the file for use
require('./server/config/routes.js')(app);


app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});