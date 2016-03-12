class Api::LocationsController < ApplicationController
  def index
    render json: current_user.locations
  end

  def create
    location = params[:location]
    new_loc = current_user.locations.create(name: location)
    render json: new_loc
  end

  def destroy
    location = Location.find(params[:id])
    location.destroy if location.user_id == current_user.id
    render json: location
  end

  def search
    api_query = params[:api_query]
    url = URI.encode("http://autocomplete.wunderground.com/aq?query=#{api_query}")
    results = HTTParty.get url
    results = JSON.parse(results)
    render json: results
  end
end
