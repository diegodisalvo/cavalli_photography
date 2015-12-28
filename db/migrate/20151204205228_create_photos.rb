class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title
      t.text :description
      t.date :captured_on
      t.string :place
      t.integer :author_id
      t.integer :collection_id
      t.boolean :main_thumbnail
      t.boolean :special_thumbnail
      t.string :image_url
      t.timestamps null: false
    end
    add_index :photos, :author_id
    add_index :photos, :collection_id
  end
end
