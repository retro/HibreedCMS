# Load the rails application
require File.expand_path('../application', __FILE__)

require 'app_subdomain'
require 'hibreed_subdomain'

# Initialize the rails application
HibreedRewrite::Application.initialize!
