class CreateComponents < ActiveRecord::Migration
  def change
    create_table :components do |t|
      t.string "author"
      t.text "content"

      t.timestamps null: false
    end
  end
end
