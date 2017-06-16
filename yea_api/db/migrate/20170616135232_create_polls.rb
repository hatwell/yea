class CreatePolls < ActiveRecord::Migration
  def change
    create_table :polls do |t|
      t.references :user, index: true, foreign_key: true
      t.string :title
      t.text :details
      t.datetime :date_created
      t.boolean :open

      t.timestamps null: false
    end
  end
end
