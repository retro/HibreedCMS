/**
 * @tag controllers, home
 */
jQuery.Controller.extend('Hibreed.Controllers.MainMenuController',
/* @Static */
{
  onDocument: true
},
/* @Prototype */
{

  'li.button mouseup': function(el, ev){
    
    if(!el.is('.active')){
      var active_el = $('#main_menu > li.active');
      active_el.find('li').removeClass('active').end().removeClass('active');
      el.addClass('active');
    }
    
  },
  'ul.main-menu-links li mouseup': function(el, ev){
    ev.stopPropagation();
    $('ul.main-menu-links .active').removeClass('active')
    el.addClass('active')
  }
});