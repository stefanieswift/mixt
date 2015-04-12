class PlaylistSong < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :playlist
end
