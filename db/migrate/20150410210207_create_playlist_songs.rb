class CreatePlaylistSongs < ActiveRecord::Migration
  def change
    create_table :playlistSongs do |t|
      t.references :playlist
      t.references :song

      t.timestamps
    end
  end
end
