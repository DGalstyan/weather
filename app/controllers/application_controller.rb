class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :verify_cookie
  def current_user
    token = cookies.permanent[:token]
    User.find_by_token(token)
  end
  private
  def verify_cookie
    token = cookies.permanent[:token]
    if token.nil? || current_user.nil?
      user = User.generate
      cookies.permanent[:token] = user[:token]
    end
  end
end
