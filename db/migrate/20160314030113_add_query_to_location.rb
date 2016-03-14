class AddQueryToLocation < ActiveRecord::Migration
  def change
    add_column :locations, :query, :string
    change_column :locations, :query, :string, null: false
  end
end
