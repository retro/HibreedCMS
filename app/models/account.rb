class Account
  include Mongoid::Document
  
  field :subdomain
  field :name
  field :production_version, :type => Integer
  field :is_active, :type => Boolean
  field :domain
  field :api_key
  field :generation, :type => Integer
  
  referenced_in :user
  references_many :snippets
  
  validates_presence_of :subdomain, :name, :user
  validates_uniqueness_of :subdomain
  
  validates_format_of     :subdomain, 
                          :with => /^[A-Za-z0-9-]+$/, 
                          :message => 'The subdomain can only contain alphanumeric characters and dashes.', 
                          :allow_blank => false
  validates_uniqueness_of :subdomain, :case_sensitive => false
  validates_exclusion_of  :subdomain, 
                          :in => ['', 'www', 'dashboard', 'webdav', 'mail', 'helpdesk', 'blog', 'support', 'billing', 'help', 'staging', 'app', 'get', 'docs'],
                          :message => "The subdomain <strong>{{value}}</strong> is reserved and unavailable."
  
end
