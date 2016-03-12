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
    if token.nil?
      new_token = SecureRandom.urlsafe_base64
      User.create(token: new_token)
      cookies.permanent[:token] = new_token
    end
  end
end
