class Hibreed::ApplicationController < ApplicationController
  
  layout 'hibreed/layouts/application'
  helper_method :menu_items

  def menu_items
    [
      ['Dashboard', root_path],
      ['Control panel', [
        ['Snippets', control_panel_snippets_path]
      ]]
    ]
  end
  
end
