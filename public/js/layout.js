WS.Layout = function( args ){

  this.$top_bar = $('.top-bar');

  // called once
  this.initialize = function(){
    console.log(" Layout initialized ");
    this.setupEvents();
    this.populatePreTags();
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
    // open side bar
    $('.top-bar .logo').on('click', this.openMenu.bind(this) );
    // item events
    $('.content-wrap').on('click', '.toggle-code', this.toggleCode.bind(this) );

  };

  this.populatePreTags = function(){
    $('.bw-item').each(function( index, item ){
      var $item = $(item).find('.content');
      var $pre = $(item).find('pre');
      if( !$pre.length ) return;
      var html = $item.html()
                  .replace(/ {2,}/g, '')
                  .replace(/\n/, "");
      $pre.text( html );
    });
  };

  this.toggleCode = function( e ){
    var $target = $(e.currentTarget);
    var $bw_item = $target.closest('.bw-item');
    $bw_item.find('pre').toggle();
  };

  this.openMenu = function(e){
    $(e.currentTarget).toggleClass('rot-180');
    $('.left-bar').toggleClass('open');
  };

};
