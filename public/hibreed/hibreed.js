steal.plugins('jquery/controller','jquery/controller/subscribe',
			  'jquery/view/ejs',
			  'jquery/model/store',
			  'jquery/model',
			  'jquery/dom/fixture',
			  'jquery/dom/dimensions',
			  'jquery/dom/form_params',
			  'ss/router')
     .resources('jquery.jqGrid-3.7.2/js/jquery.jqGrid.min', 'jqgrid_formatters')
     .models()
     .controllers('main', 'main_menu', 'list_resource')
     .views('list_resource/index.ejs', 'list_resource/summary.ejs', 'formatters/actions.ejs')
     .then(function($){
       Router.add('/control_panel/:resource').to('list_resource')
     })