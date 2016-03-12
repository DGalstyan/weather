# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
["New York, NY", "Chicago, IL", "Seattle, WA", "Houston, TX", "San Diego, CA"].each do |city|
  User.last.locations.create(name: city)
end
