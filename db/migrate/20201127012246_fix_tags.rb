class FixTags < ActiveRecord::Migration[5.2]
  def change
    remove_column :tags, :note_id
  end
end
