RAILS_GEM_VERSION = '2.3.10' unless defined? RAILS_GEM_VERSION

require File.join(File.dirname(__FILE__), 'boot')
require 'ostruct'

Rails::Initializer.run do |config|
  
  config.gem 'compass',          :version => '0.10.5', :source => 'rubygems.org'
  config.gem 'redgreengrid',     :version => '0.3.2',  :source => 'rubygems.org'
  config.gem 'lemonade',         :version => '0.3.4',  :source => 'rubygems.org'
  config.gem 'oauth',            :version => '0.4.0',  :source => 'rubygems.org'
  config.gem 'devise',           :version => '1.0.8',  :source => 'rubygems.org'
  config.gem 'crack',            :version => '0.1.8',  :source => 'rubygems.org'
  config.gem 'httparty',         :version => '0.6.1',  :source => 'rubygems.org'
  config.gem 'formtastic',       :version => '0.9.10', :source => 'rubygems.org'
  config.gem 'hoptoad_notifier', :version => '2.3.3',  :source => 'rubygems.org'
  config.gem 'newrelic_rpm',     :version => '2.13.2'
  config.gem 'jnunemaker-validatable', :lib => 'validatable'
  config.gem 'smurf',            :version => '1.0.4',   :source => 'rubygems.org'
  config.gem 'spatial_adapter'
  config.gem 'geoip'
  config.gem 'ya2yaml'
  config.gem 'will_paginate',    :version => '2.3.15'
end

Haml::Template.options[:format] = :html5
Haml::Template.options[:attr_wrapper] = '"'


