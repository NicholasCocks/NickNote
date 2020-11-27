class Create < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :title, null: false
      t.integer :note_id, null: false
      t.integer :author_id, null: false
      t.index :author_id
      t.timestamps
    end
  end
end
