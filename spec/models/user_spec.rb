require 'spec_helper'
require 'remarkable/mongoid'


describe User do
  it { should reference_many :accounts }
end
