var path = require('path');
var asset_map = require('./assets.js').page_assets();

exports.renderPage = function( req, res ){
  return res.render('layout', {
    page: 'page1',
    core: 'core',
    layout: 'layout'
  });
};

function _render( layout, page, args ){
  return res.render('layout', {
    page: 'page1',
    core: 'core',
    layout: 'layout'
  });
};

exports.page1 = function( req, res ){

  return res.render('layout', {
    page: 'page1',
    core: 'core',
    layout: 'layout'
  });
};

exports.page2 = function( req, res ){
  var assets = generateAssetObj('page_2');

  return res.render('layout', {
    page: 'page2',
    foo: "bar2",
    assets: assets
  });
};

exports._404 = function( req, res ){
  console.log( req.originalUrl );

  res.status(404);
  return res.sendFile(
    path.resolve( __dirname + '/../public/_404.html' )
  );
};

exports._500 = function( req, res ){
  res.status(500);
  return res.sendFile(
    path.resolve( __dirname + '/../public/_500.html' )
  );
};
