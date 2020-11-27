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
    validates :notebook_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
    
    belongs_to :notebook,
        foreign_key: :notebook_id,
        class_name: :Notebook

    has_many :taggables,
        foreign_key: :note_id,
        class_name: :Taggable 

    has_many :tags,
        through: :taggables,
        source: :tag 
end
