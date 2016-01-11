var cons = require('consolidate');
var ejs = require('ejs');
var _ = require('lodash');

// express, session
var express = require('express');
var session = require('express-session');

// middleware
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var multer = require('multer');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var favicon = require('serve-favicon');
var compression = require('compression');
var errorhandler = require('errorhandler');

var uploads = multer({ dest: 'public/uploads' });
var server = exports.server = express();

// setup middleware
server.use( express.static(__dirname + '/public') );          // serve static assets
server.use(favicon(__dirname + '/public/favicon.ico'));       // serve favicon
server.use(bodyParser.json());                                // body parser, for POST request
server.use(bodyParser.urlencoded({ extended: true }));        // body parser, for POST request
server.use(methodOverride());                                 // allow PUT and DELETE
server.use(cookieParser());                                   // populate req.cookies

// setup views
server.set('view engine', 'ejs');                             // set template engine
server.set('views', __dirname + '/app/views');                // set views dir
server.set('view cache', true);

// setup lodash templates
var templates = require('./app/templates.js')({
  path: 'public/templates/',
  ext: '.tmpl.html'
});

// expose templates to global, allows lodash templates to work
global.templates = templates;
// expose assets to views
server.locals.assets = require('./app/assets.js').page_assets();

// expose req obj to views
server.use( function( req, res, next ){
  res.locals.req = req;
  res.locals.templates = templates;
  next();
});

// env specific middleware
if (process.env.NODE_ENV === 'development'){
  server.use(morgan('dev'));                                    // log requests
  server.use(errorhandler());                                   // show stack errors
}
if (process.env.NODE_ENV === 'production'){
  server.use(morgan('common'));                                    // log requests
}

// route file
require('./app/routes.js')(server);

// start server
server.listen( 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, server.settings.env);
});
