class MainController < ApplicationController
  def index
  	@components = Component.all

  end
end
