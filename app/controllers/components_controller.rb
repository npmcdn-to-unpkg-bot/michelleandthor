class ComponentsController < ApplicationController

  def create_gif
    Component.create!(author: params[:author], content: params[:content],to_prompt: ActiveRecord::Type::Boolean.new.type_cast_from_database(params[:to_prompt]), prompt_id: params[:prompt_id], category: "gif")
    redirect_to root_path(anchor: "all-comments")
  end

  def create_comment
    @comment = Component.create!(author: params[:component][:author], content: params[:component][:content], to_prompt: ActiveRecord::Type::Boolean.new.type_cast_from_database(params[:component][:to_prompt]), prompt_id: params[:component][:prompt_id],category: 'comment')

    redirect_to root_path(anchor: "all-comments")
  end

  def create_img
    @comment = Component.create!(author: params[:component][:author], content: params[:component][:content], to_prompt: ActiveRecord::Type::Boolean.new.type_cast_from_database(params[:component][:to_prompt]), prompt_id: params[:component][:prompt_id],category: 'img')

    redirect_to root_path(anchor: "all-comments")
  end

  private

  # def comment_params
  #   params.require(:component).permit(:author, :content, :category)
  # end

end
