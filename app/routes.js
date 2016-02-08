var pages = require("./pagesController.js");
var api   = require("./apiController.js");

module.exports = function(app) {

  // pages
  app.get('/', pages.renderPage );
  app.get('/page1', pages.page1 );
  app.get('/page2', pages.page2 );
  app.get('/flexbox', pages.flexbox );
  app.get('*', pages._404)

  // api
  app.route('/api/*')
    .get( api.renderAPI );

};
