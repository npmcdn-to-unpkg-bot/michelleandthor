class MainController < ApplicationController
  def index
  	@comments = Comment.all

  end
end
