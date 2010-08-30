steal.plugins('jquery/controller','jquery/controller/subscribe',
			  'jquery/view/ejs',
			  'jquery/model/store',
			  'jquery/model',
			  'jquery/dom/fixture',
			  'jquery/dom/form_params',
			  'ss/router')
     .resources()
     .models()
     .controllers('main', 'main_menu')
     .views()
     .then(function($){
       Router.add('/snippets').to('project_title')
     })