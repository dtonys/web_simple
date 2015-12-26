WS.SampleModule = function( args ){
  this.$container = args.$container || null;
  this.parent     = args.parent     || null;

  // called once
  this.initialize = function(){
    console.log(" SampleModule ");
    this.renderTemplate();
    this.setupEvents();
  };

  // reRender the view
  this.reRender = function(){
    this.renderTemplate();
    this.setupEvents();
  };

  // render ejs template to $container
  this.renderTemplate = function(){
  };

  // event handlers
  this.setupEvents = function(){
    this.$container.off();
    this.$container
      .on('click', this.handleClick.bind( this ) )
  };

  this.handleClick = function(){
  };

};
