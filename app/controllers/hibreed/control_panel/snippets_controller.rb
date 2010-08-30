class Hibreed::ControlPanel::SnippetsController < Hibreed::ApplicationController
  inherit_resources
  
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
  
  
  protected
  
  def collection
    @count = end_of_association_chain.count
    @snippets = end_of_association_chain.paginate(:page => params[:page], :per_page => params[:rows])
  end
  
end
