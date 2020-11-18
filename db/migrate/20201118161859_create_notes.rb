class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :notebook_id, null: false
      t.index :notebook_id
      t.integer :author_id, null: false
      t.index :author_id
      t.timestamps
    end
  end
end
