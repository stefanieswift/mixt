class Playlist < ActiveRecord::Base
  # Remember to create a migration!
  has_many :playlistSongs
  has_many :songs, through: :playlist_songs
  belongs_to :user
end
