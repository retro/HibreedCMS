class User
  include Mongoid::Document
  
  devise :database_authenticatable, :recoverable, :rememberable, :trackable, :validatable, :lockable, :registerable
  
  references_many :accounts
end
