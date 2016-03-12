class Api::WeathersController < ApplicationController
  # API Weather Controller is the server interface with Wunderground API
  # Requires API key stored in an environment variable to operate
  def show
    api_query = params[:api_query]
    url = URI.encode("http://api.wunderground.com/api/#{ENV["API_KEY"]}/#{api_query}")
    weather = HTTParty.get url
    render json: weather
  end
end
