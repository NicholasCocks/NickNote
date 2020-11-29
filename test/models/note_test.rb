# == Schema Information
#
# Table name: notes
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  body        :text             not null
#  notebook_id :integer          not null
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  trashed     :boolean          default(FALSE)
#  starred     :boolean          default(FALSE)
#
require 'test_helper'

class NoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
