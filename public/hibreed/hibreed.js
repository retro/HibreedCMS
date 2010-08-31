steal.plugins('jquery/controller','jquery/controller/subscribe',
			  'jquery/view/ejs',
			  'jquery/model/store',
			  'jquery/model',
			  'jquery/dom/fixture',
			  'jquery/dom/dimensions',
			  'jquery/dom/form_params',
			  'ss/router')
     .resources('jquery.jqGrid-3.7.2/js/jquery.jqGrid.min', 'jqgrid_formatters', 'jGrowl-1.2.4/jquery.jgrowl')
     .models()
     .controllers('main', 'main_menu', 'list_resource', 'module_snippets')
     .views('list_resource/index.ejs', 'list_resource/summary.ejs', 'formatters/actions.ejs', 'page_layouts/generic')
     .then(function($){
       Router.add('/control_panel/:resource').to('controller_for_resource')
     })