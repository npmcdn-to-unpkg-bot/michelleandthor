class Component < ActiveRecord::Base

  # temporary fix for now
  scope :is_approved, -> {where.not(author: [nil, ""], content: nil, category: nil) }
end
