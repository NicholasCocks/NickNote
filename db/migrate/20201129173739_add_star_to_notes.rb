class AddStarToNotes < ActiveRecord::Migration[5.2]
  def change
    add_column :notes, :starred, :boolean, :default => false
  end
end
