class MainController < ApplicationController
  def index
  	@components = Component.all.is_approved.by_age.reverse
    @prompt = Prompt.create(content: "What is a good name for Grube?")
  end
end
