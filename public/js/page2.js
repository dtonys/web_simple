$(document).ready(function(){

  var layout = new WS.Layout();
  layout.initialize();

  var page = new WS.Page_2({
    $container: $("#page_2"),
    parent: this
  });
  page.initialize();

});

WS.Page_2 = function( args ){
  for( var i in args ) this[i] = args[i];

  // called once
  this.initialize = function(){
    console.log(" Page_2 initialized ");
    this.setupEvents();
  };

  // event handlers
  this.setupEvents = function(){
    this.$container.off();
    this.$container
      .on('click', this.handleClick.bind( this ) )
  };

  this.handleClick = function(){
    console.log(' Page_2 click ');
  };

};
