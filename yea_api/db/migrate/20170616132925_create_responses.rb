class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.references :user, index: true, foreign_key: true
      t.references :poll, index: true, foreign_key: true
      t.integer :rating
      t.boolean :visible

      t.timestamps null: false
    end
  end
end
