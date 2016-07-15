class Inquiry < ActiveRecord::Base
  validates :name, :email, :phone_number, :message, presence: true
end