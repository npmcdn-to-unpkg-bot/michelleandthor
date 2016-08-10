class AddSuggestedPromptToComponent < ActiveRecord::Migration
  def change
    add_column :components, :to_prompt, :boolean
  end
end
