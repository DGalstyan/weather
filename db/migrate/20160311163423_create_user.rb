class CreateUser < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :token, null: false
    end
  end
end
