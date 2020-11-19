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
#
class Note < ApplicationRecord
    validates :title, :author_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end
