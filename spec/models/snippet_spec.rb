require 'spec_helper'

describe Snippet do
  it { should validate_presence_of(:name)}
  it { should validate_presence_of(:content)}
  it { should be_referenced_in(:account) }
end
