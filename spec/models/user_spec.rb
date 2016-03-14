require 'rails_helper'

describe User do
  it { should validate_presence_of(:token) }
  it { should validate_length_of(:locations) }
end
