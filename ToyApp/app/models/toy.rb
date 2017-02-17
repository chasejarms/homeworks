# == Schema Information
#
# Table name: toys
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  toyable_id   :integer
#  toyable_type :string
#

class Toy < ActiveRecord::Base
  belongs_to :toyable, polymorphic: true

  validates :name, presence: true, uniqueness: { scope: [:toyable_id, :toyable_type] }
end
