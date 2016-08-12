class MainController < ApplicationController
  def index
  	@components = Component.all.is_approved
    @prompt = Prompt.last

  end
end
