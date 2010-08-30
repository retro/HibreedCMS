$.Controller.extend("Hibreed.Controllers.MainController",
  {
    hasActiveElement : document.activeElement || false,
    onDocument: true
  },
  {
    ready: function(){
      
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
      if(el.attr('href') != '#')
      window.location.hash = el.attr('href')
    }
  }
);