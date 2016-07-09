class CommentsController < ApplicationController
	def create
		@comment = Comment.create!(comment_params)

		redirect_to root_path
	end	

	private

	def comment_params
		params.require(:comment).permit(:author, :content)
	end
end
