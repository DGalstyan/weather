require 'rails_helper'

describe StaticPagesController do
  it "should set a cookie if none exists" do
    cookies.permanent[:token] = nil
    get :root
    expect(cookies.permanent[:token]).not_to be_nil
  end
  it "should reset cookie if no matching user found" do
    cookies.permanent[:token] = "fake_cookie"
    get :root
    expect(cookies.permanent[:token]).not_to eq("fake_cookie")
  end
end
