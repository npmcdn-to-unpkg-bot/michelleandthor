class ComponentsController < ApplicationController

  def create_gif

    p "---"*100
    p params[:to_prompt]
    if params[:to_prompt] == 1
      to_prompt_boolean = true
    else
      to_prompt_boolean = false
    end
    p to_prompt_boolean

    Component.create(content: params[:selectedGifUrl], author: params[:author], to_prompt: to_prompt_boolean, prompt_id: Prompt.last.id, category: "gif")
    redirect_to root_path(anchor: "all-comments")
  end

  def create_comment
    @comment = Component.create(author: params[:component][:author], content: params[:component][:content], to_prompt: params[:to_prompt],prompt_id: Prompt.last.id,category: 'comment')

    redirect_to root_path(anchor: "all-comments")
  end

  private

  # def comment_params
  #   params.require(:component).permit(:author, :content, :category)
  # end

end
