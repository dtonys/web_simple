var path = require('path');

exports.renderPage = function( req, res ){
  return res.render('layout', {
    page_template: 'test',
    foo: "bar1"
  });
};

function generateAssetObj( name ){
  return {
    js: [
      '/js/'+name+'.js'
    ],
    js_min: '/build/'+name+'.min.js',
    css: [
      '/css/'+name+'.css'
    ],
    css_min: 'build/'+name+'.min.css'
  };
};

exports.page1 = function( req, res ){
  var assets = generateAssetObj('page_1');

  return res.render('layout', {
    page_template: 'page1',
    foo: "bar1",
    assets: assets
  });
};

exports.page2 = function( req, res ){
  var assets = generateAssetObj('page_2');

  return res.render('layout', {
    page_template: 'page2',
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
