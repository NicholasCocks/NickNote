class CreateTaggable < ActiveRecord::Migration[5.2]
  def change
    create_table :taggables do |t|
      t.integer :note_id, null: false
      t.index :note_id
      t.integer :tag_id, null: false
      t.index :tag_id
    end
  end
end
