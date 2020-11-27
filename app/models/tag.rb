# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tag < ApplicationRecord
    validates :title, :author_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_many :taggables,
        foreign_key: :tag_id,
        class_name: :Taggable 

    has_many :notes,
        through: :taggables,
        source: :note 

end
