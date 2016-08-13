class MainController < ApplicationController
  def index
  	@components = Component.all.is_approved.by_age.reverse
    @prompt = Prompt.last

  end
end
