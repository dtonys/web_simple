var _ = require('lodash');
var fs = require('fs');
var glob = require("glob");

var templates = {};

module.exports = function( args ){
  var files = glob.sync(args.path + "**/*"+args.ext);
  files.forEach(function( item, index ){
    var filename = item.replace(args.path, '') .replace(args.ext, '');
    var tmpl = fs.readFileSync(item, 'utf8');
    templates[filename] = _.template(tmpl);
  });
  return templates;
};
