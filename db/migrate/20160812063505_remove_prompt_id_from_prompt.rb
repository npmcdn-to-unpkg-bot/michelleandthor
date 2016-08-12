class RemovePromptIdFromPrompt < ActiveRecord::Migration
  def change
    remove_column :prompts, :prompt_id, :integer
  end
end
