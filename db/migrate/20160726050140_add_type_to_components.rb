class AddTypeToComponents < ActiveRecord::Migration
  def change
    add_column :components, :type, :string
  end
end
