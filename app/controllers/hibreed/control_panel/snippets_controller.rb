class Hibreed::ControlPanel::SnippetsController < Hibreed::ApplicationController
  
  
  inherit_resources
  
  responders :flash
  
  respond_to :json, :js
  
  rescue_from Mongoid::Errors::DocumentNotFound do |exception|
    render :js => {
      :message => not_found_message
    }, :status => :not_found
  end
  
  def index
    index! do |format|
      format.json do
        page = params[:page] || 1
        render :json => {
          :page => page.to_i,
          :total => @snippets.total_pages,
          :records => @count,
          :rows => @snippets.map{|s| {:name => s.name, :id => s.id.to_s, :content => s.content}}
        }
      end
    end
  end
  
  def destroy
    destroy! do |format|
      format.js do
        render :json => {
          :message => flash.notice
        }
      end
      
    end
  end
  
  protected
  
  def not_found_message
    "#{end_of_association_chain.name.demodulize.titleize} can't be found"
  end
  
  def collection
    @count = end_of_association_chain.count
    @snippets = end_of_association_chain.paginate(:page => params[:page], :per_page => params[:rows])
  end
  
end
