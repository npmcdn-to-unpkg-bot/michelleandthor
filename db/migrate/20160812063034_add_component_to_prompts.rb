class AddComponentToPrompts < ActiveRecord::Migration
  def change
    add_reference :components, :prompt, index: true
  end
end
