// assets.js
// declare assets in single place,
// consumed by ejs views and gruntfile
var _ = require('lodash');

var asset_map = {
  core: {
    js: [
      '/js/vendor/jquery-2.1.4.min.js',
      '/js/vendor/lodash.min.js'
    ],
    css: [
      '/css/normalize.css',
      '/css/default.css'
    ]
  },
  layout: {
    js: [
      '/js/compiled_templates.js',
      '/js/layout.js'
    ],
    css: [
      '/css/layout.css'
    ]
  },
  page1: {
    js: [
      '/js/page1.js'
    ],
    css: [
      '/css/page1.css'
    ]
  },
  page2: {
    js: [
      '/js/page2.js'
    ],
    css: [
      '/css/page2.css'
    ]
  },
  flexbox: {
    js: [],
    css: [
      '/css/page3.css'
    ]
  }
};

function min( map ){
  for( var name in map ){
    var obj = map[name];
    obj.js_min = !obj.js_min && obj.js.length ? '/build/'+name+'.min.js' : '';
    obj.css_min = !obj.css_min && obj.css.length ? '/build/'+name+'.min.css' : '';
  }
}

function prefix( map, prefix ){
  for( var name in map ){
    var obj = map[name];
    for( asset_key in obj ){
      var asset_item = obj[asset_key];
      if( Array.isArray( asset_item ) ){
        var arr = asset_item.map( function( item ){
          return prefix + item;
        });
        obj[asset_key] = arr;
      }
      else if( typeof asset_item === 'string' ){
        obj[asset_key] = prefix + asset_item;
      }
    }
  }
};

exports.page_assets = function(){
  _asset_map = _.cloneDeep( asset_map );
  min( _asset_map );
  return _asset_map;
};

exports.grunt_assets = function(){
  _asset_map = _.cloneDeep( asset_map );
  min( _asset_map );
  prefix( _asset_map, 'public');

  var js_map = {};
  var css_map = {};

  for( name in _asset_map ){
    var obj = _asset_map[name];
    if( obj.js_min )  js_map[obj.js_min]  = obj.js;
    if( obj.css_min ) css_map[obj.css_min] = obj.css;
  }

  return {
    js_map: js_map,
    css_map: css_map
  };

};
