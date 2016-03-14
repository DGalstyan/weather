require 'rails_helper'

describe StaticPagesController do
  it "should set a cookie if none exists" do
    cookies.permanent[:token] = nil
    get :root
    expect(cookies.permanent[:token]).not_to be_nil
  end
end
