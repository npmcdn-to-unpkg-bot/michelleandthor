class RemoveTypesAndAddCategoryToComponents < ActiveRecord::Migration
  def change
    remove_column :components, :type, :string
    add_column :components, :category, :string
  end
end
