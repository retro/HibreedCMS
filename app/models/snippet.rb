class Snippet
  include Mongoid::Document
  
  field :name
  field :content
  
  referenced_in :account
  
  validates_presence_of :name, :content
  
end
