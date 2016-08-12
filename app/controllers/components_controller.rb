class ComponentsController < ApplicationController

  def create_gif
    Component.create(content: params[:selectedGifUrl], author: params[:author], to_prompt: params[:to_prompt], prompt_id: Prompt.last.id, category: "gif")
    redirect_to root_path(anchor: "all-comments")
  end

  def create_comment
    @comment = Component.create(author: params[:component][:author], content: params[:component][:content], prompt_id: Prompt.last.id,category: 'comment')

    redirect_to root_path(anchor: "all-comments")
  end

  private

  # def comment_params
  #   params.require(:component).permit(:author, :content, :category)
  # end

end
