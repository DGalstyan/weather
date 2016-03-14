require 'rails_helper'

describe Location do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:query) }
  it { should belong_to(:user) }
end
