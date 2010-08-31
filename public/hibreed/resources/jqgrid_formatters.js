jQuery.extend($.fn.fmatter, {
  actionsFormatter: function(cellvalue, options, rowdata){
    return $.View('hibreed/views/formatters/actions.ejs', {cellvalue: cellvalue, options: options, rowdata: rowdata});
  }
});