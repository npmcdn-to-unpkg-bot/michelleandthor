class MainController < ApplicationController
  def index
  	@components = Component.all.is_approved.by_age.reverse
    @prompt = Prompt.last || Prompt.create(content: "What is a fun date idea?")
  end
end
