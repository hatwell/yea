class AddBodyToResponse < ActiveRecord::Migration
  def change
    add_column :responses, :body, :string
  end
end
