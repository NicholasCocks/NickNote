class CreateNotebooks < ActiveRecord::Migration[5.2]
  def change
    create_table :notebooks do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.index :author_id
      t.boolean :first_notebook, :default => false
      t.timestamps
    end
  end
end
