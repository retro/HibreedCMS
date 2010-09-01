class Snippet
  include Mongoid::Document
  
  field :name
  field :content
  
  referenced_in :account
  
  validates_presence_of :name, :content

  def as_json(options = nil)
    {:id => self._id.to_s, :name => self.name, :content => self.content}
  end
  
end
