class MainController < ApplicationController
  def index
  	@components = Component.all.is_approved

  end
end
