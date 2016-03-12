class User < ActiveRecord::Base
  validates :token, presence: true
  has_many :locations
  after_save :add_default_locations

  private
  def add_default_locations
    ["New York, NY", "Chicago, IL", "Seattle, WA", "Houston, TX", "San Diego, CA"].each do |city|
      locations.create(name: city)
    end
  end
end
