/**
 * @tag controllers, home
 */
jQuery.Controller.extend('Hibreed.Controllers.ListResource',
/* @Static */
{

},
/* @Prototype */
{
  setup: function(el, resource, resource_path){
    this.resource      = resource;
    this.resource_path = resource_path;
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
    return this.element.innerHeight() - 37;
  },
  loadList: function(){
    var controller = this;
    this.element.find('.list-resource table#list-resource').jqGrid({
      loadComplete: function(data){
        controller.updateSummary(data);
      },
      scroll: 1,
      url: this.resource_path + '.json',
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
  'window.resized subscribe': function(){
    this.element.find('.list-resource table#list-resource').setGridWidth(this.gridWidth()).setGridHeight(this.gridHeight());
  }
});