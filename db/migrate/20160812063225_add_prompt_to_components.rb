class AddPromptToComponents < ActiveRecord::Migration
  def change
    add_reference :components, :prompt, index: true, foreign_key: true
  end
end
