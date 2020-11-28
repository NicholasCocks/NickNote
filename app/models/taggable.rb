# == Schema Information
#
# Table name: taggables
#
#  id        :bigint           not null, primary key
#  note_id   :integer          not null
#  tag_id    :integer          not null
#  author_id :integer
#
class Taggable < ApplicationRecord
    validates :note_id, :tag_id, presence: true
    validates_uniqueness_of :note_id, :scope => [:tag_id]
    
    belongs_to :note,
        foreign_key: :note_id,
        class_name: :Note

    belongs_to :tag,
        foreign_key: :tag_id,
        class_name: :Tag

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User
end
