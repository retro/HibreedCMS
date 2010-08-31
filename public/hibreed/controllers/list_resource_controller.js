/**
 * @tag controllers, home
 */
jQuery.Controller.extend('Hibreed.Controllers.ListResource',
/* @Static */
{

},
/* @Prototype */
{
  setup: function(el, resource_controller){
    this.resource_controller = resource_controller;
    this._super(el);
  },
  ready: function(){
    this.element.html(this.view('list_resource/index'));
    this.loadList();
  },
  gridWidth: function(){
    return this.element.innerWidth();
  },
  gridHeight: function(){
    return this.element.innerHeight() - 79;
  },
  loadList: function(){
    var controller = this;
    this.grid_el = this.element.find('.list-resource table#list-resource');
    this.grid_el.jqGrid({
      loadComplete: function(data){
        controller.updateSummary(data);
      },
      scroll: 1,
      url: this.resource_controller.collection_url() + '.json',
      datatype: 'json',
      mtype: 'GET',
      colNames: ['Name', 'Content', ''],
      colModel:[
        {name: 'name', index: 'name', width: 300},
        {name: 'content', index: 'content', classes: 'col-before-actions'},
        {name: 'actions', index: '', width: 115, fixed: true, formatter: 'actionsFormatter', sortable: false, classes: 'actions'}
      ],
      gridview: true,
      rowNum: 100,
      rownumbers: true,
      rownumWidth: 40,
      width: this.gridWidth(),
      height: this.gridHeight(),
      forceFit: true,
      cellLayout: 21,
      jsonReader: {
        repeatitems: false
      }
    });
  },
  updateSummary: function(data){
    this.element.find('.list-resource-summary').html(this.view('list_resource/summary', {data: data}));
  },
  '.delete click': function(el, ev){
    var id = el.parents('tr').attr('id');
    var controller = this;
    if(confirm('Are you sure?')){
      $.post(this.resource_controller.destroy_url(id), {_method: 'delete'}, function(response){
        var message = JSON.parse(response)['message'];
        controller.grid_el.jqGrid('delRowData', id);
        $.jGrowl(message)
      });
    }
    
  },
  'window.resized subscribe': function(){
    this.element.find('.list-resource table#list-resource').setGridWidth(this.gridWidth()).setGridHeight(this.gridHeight());
  }
});