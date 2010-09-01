$.Model.extend("Snippet", 
{
  find: function(id, success){
    $.get('/control_panel/snippets/' + id + '.json', {}, this.callback(['wrap', success]), 'json');
  }
},
{
  
})