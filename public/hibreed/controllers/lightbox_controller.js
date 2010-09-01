/**
 * @tag controllers, home
 */
jQuery.Controller.extend('Hibreed.Controllers.Lightbox',
/* @Static */
{
  onDocument: true
},
/* @Prototype */
{
  ready: function(){
    var controller = this;
    this.isOpenLightbox = false;
    $(document).keyup(function(event){
      if(controller.isOpenLightbox && event.keyCode == 27) controller.closeLightbox();
    });    
  },
  openLightbox: function(html){
    var lightbox = $('.lightbox');
    lightbox.html(html).css('margin-left: -10000px');
    var width = lightbox.outerWidth();
    var height = lightbox.outerHeight();
    lightbox.css('margin-left', '-' + parseInt(width / 2) + 'px').css('margin-top', '-' + parseInt(height / 2) + 'px').show();
    $('#lightbox').show();
    this.isOpenLightbox = true;
  },
  closeLightbox: function(){
    $('#lightbox').hide().find('.lightbox').html('');
    this.isOpenLightbox = false;
  },
  'click': function(el, ev){
    if($(ev.target).attr('id') == 'lightbox') this.closeLightbox();
  },
  'lightbox.show subscribe': function(ev, html){
   this.openLightbox(html);
  },
  'lightbox.destroy subscribe': function(){
    this.closeLightbox();
  }

});