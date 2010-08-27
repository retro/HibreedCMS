require 'spec_helper'
require 'remarkable/mongoid'


describe Account do
  
  before do
    @account = Fabricate(:account)
    @user    = Fabricate(:user)
  end
  
  it { should be_referenced_in(:user) }
  it { should validate_presence_of(:user) }
  it { should validate_presence_of(:subdomain) }
  it { should validate_presence_of(:name) }
  it { should validate_uniqueness_of(:subdomain)}
  
  describe "User association" do
    
    it "should be initially nil" do
      @account.user.should be_nil
    end
    
    it "should have user assocition after you add account to user accounts" do
      @user.accounts = [@account]
      @account.user.should be @user
    end

  end
  
  describe "Subdomain validation" do
    it "should allow only alnum characters in subdomain" do
      @account.subdomain = "Test! 12345 $$$$$"
      @account.should_not be_valid
    end
  end

end
