class Component < ActiveRecord::Base
  belongs_to :prompt

  # temporary fix for now
  scope :is_approved, -> {where.not(author: [nil, ""], content: nil, category: nil) }

  def gif?
    category == 'gif'
  end

  def long_comment?
    category == 'comment' && content.length >= 50
  end

  def short_comment?
    category == 'comment' && content.length < 50
  end

end
