class Hibreed::ApplicationController < ApplicationController
  
  layout 'hibreed/layouts/application'
  helper_method :menu_items

  def menu_items
    [
      ['Dashboard', root_path]
    ]
  end
  
end
