this["templates"] = this["templates"] || {};

this["templates"]["test"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div>\nTest Template1\n' +((__t = ( templates['test2']({}) )) == null ? '' : __t) +'\n</div>';}return __p};

this["templates"]["test2"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div>\nTest Template2\n</div>';}return __p};