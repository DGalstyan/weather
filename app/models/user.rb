class User < ActiveRecord::Base
  validates :token, presence: true
  has_many :locations
  validates_length_of :locations, :maximum => 5
  after_save :add_default_locations

  def self.generate
    new_token = SecureRandom.urlsafe_base64
    User.create(token: new_token)
  end

  private
  def add_default_locations
    # User's are initialized with 5 default locations as per assignment instructions.
    [
      {
        name: "New York, NY",
        query: "/q/zmw:10001.1.99999"
      },
      {
        name: "Chicago, IL",
        query: "/q/zmw:60290.1.99999"
      },
      {
        name: "Seattle, WA",
        query: "/q/zmw:98101.1.99999"
      },
      {
        name: "Houston, TX",
        query: "/q/zmw:77001.1.99999"
      },
      {
        name: "San Diego, CA",
        query: "/q/zmw:92101.1.99999"
      }
    ].each do |loc|
      locations.create(name: loc[:name], query: loc[:query])
    end

  end
end
