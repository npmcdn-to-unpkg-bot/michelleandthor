class Component < ActiveRecord::Base
  belongs_to :prompt

  # temporary fix for now
  scope :is_approved, -> {where.not(author: [nil, ""], content: nil, category: nil) }
  scope :by_age, ->{ order(:created_at) }
  def gif?
    category == 'gif'
  end

  def long_comment?
    category == 'comment' && content.length >= 75
  end

  def short_comment?
    category == 'comment' && content.length < 75
  end

end
