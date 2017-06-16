class Poll < ActiveRecord::Base
  belongs_to :user

  def get_user
    self.user
  end

end
