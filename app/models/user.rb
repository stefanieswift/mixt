require 'bcrypt'

class User < ActiveRecord::Base
  # Remember to create a migration!
  has_many :playlists
  has_many :songs, through: :playlists
  has_many :relationships
  has_many :followers, through: :relationships
  has_many :opposite, class_name: "Relationship", foreign_key: "followee_id"
  has_many :followees, through: :opposite, source: :follower

  include BCrypt

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end
end