class Post < ActiveRecord::Base
  validates :title, :body, :description, presence: true
end