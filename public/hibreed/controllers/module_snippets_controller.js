/**
 * @tag controllers, home
 */
jQuery.Controller.extend('Hibreed.Controllers.ModuleSnippets',
/* @Static */
{

},
/* @Prototype */
{
  ready: function(){
    this.element.html(this.view('page_layouts/generic'));
    this.base_url = '/control_panel/snippets';
    this.index_action();
  },
  index_action: function(){
    this.list = this.element.find('.content').hibreed_list_resource(this);
  },
  edit_action: function(id){
    Snippet.find(id, this.callback(['openEditForm']))
  },
  openEditForm: function(snippet){
    this.publish('lightbox.show', 'Test lightbox message')
  },
  collection_url: function(){
    return this.base_url;
  },
  destroy_url: function(id, format){
    format = format || '.js'
    return this.base_url + '/' + id + format;
  }
});