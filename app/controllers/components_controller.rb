class ComponentsController < ApplicationController

  def create_gif
    Component.create(content: params[:selectedGifUrl], author: params[:author], category: "gif");
  end

  def create_comment
    @comment = Component.create(author: params[:component][:author], content: params[:component][:content], category: 'comment')

    redirect_to root_path
  end

  private

  # def comment_params
  #   params.require(:component).permit(:author, :content, :category)
  # end

end
