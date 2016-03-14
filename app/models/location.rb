class Location < ActiveRecord::Base
  validates :name, :query, :user_id, presence: true
  belongs_to :user
end
