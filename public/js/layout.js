WS.Layout = function( args ){

  // called once
  this.initialize = function(){
    console.log(" Layout initialized ");
  };

  // called to re-render template
  this.reRender = function(){
    this.renderTemplate();
    this.setupEvents();
  };

  // render ejs template to $container
  this.renderTemplate = function(){
  };

  // event handlers
  this.setupEvents = function(){
  };

};
