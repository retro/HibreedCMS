$.Controller.extend("Hibreed.Controllers.MainController",
  {
    hasActiveElement : document.activeElement || false,
    onDocument: true
  },
  {
    ready: function(){
      var controller = this;
      this.activateMenuItem(window.location.hash.substring(1));
      $(window).resize(function(){
        controller.publish('window.resized');
      })
    },
    'controller_for_resource subscribe': function(ev, params){
      $('#content-wrapper')['hibreed_module_' + params['resource']](params);
    },
    activateMenuItem: function(href){
      href_array = href.split('/');
      while(href_array.length > 0){
        $('#main_menu [href="' + href_array.join('/') + '"]').parents('li').addClass('active');
        href_array.pop();
      }
    },
    '.button mousedown': function(el, ev){
      if($(ev.target).is('.button') || $(ev.target).is('.button > a'))
        $(el).addClass('mousedown');
    },
    '.button mouseup': function(el, ev){
      $(el).removeClass('mousedown');
    },
    '.button mouseout': function(el, ev){
      $(el).removeClass('mousedown');
    },
    'a click': function(el, ev){
      ev.preventDefault();
      var href = el.attr('href') ;
      if(href != '#'){
        window.location.hash = href;
      }
    }
  }
);