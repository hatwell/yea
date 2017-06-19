class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  before_action :authenticate_user!

  def after_sign_in_path_for(resource)
    "http://localhost:3000/" || stored_location_for(resource) || root_path
  end

  respond_to :html, :json
end
