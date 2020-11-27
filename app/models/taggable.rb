# == Schema Information
#
# Table name: taggables
#
#  id      :bigint           not null, primary key
#  note_id :integer          not null
#  tag_id  :integer          not null
#
class Taggable < ApplicationRecord
    validates :note_id, :tag_id, presence: true
    
    belongs_to :note,
        foreign_key: :note_id,
        class_name: :Note

    belongs_to :tag,
        foreign_key: :tag_id,
        class_name: :Tag
end
