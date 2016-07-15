class ApplicationController < ActionController::Base
  # protect_from_forgery
  before_filter :add_allow_credentials_headers

  def add_allow_credentials_headers
    response.headers['Access-Control-Allow-Origin'] = request.headers['Origin'] || '*'
    response.headers["Access-Control-Allow-Methods"] = "GET, PUT, POST, DELETE"
  end

  def options
    head :status => 200, :'Access-Control-Allow-Headers' => 'accept, content-type'
  end
end