class RemoveDateCreatedFromPoll < ActiveRecord::Migration
  def change
    remove_column :polls, :date_created, :datetime
  end
end
