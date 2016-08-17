class Component < ActiveRecord::Base
  belongs_to :prompt

  # temporary fix for now
  scope :is_approved, -> {where.not(author: [nil, ""], category: nil) }
  scope :by_age, ->{ order(:created_at) }
  def gif_img?
    category == 'gif' || category == 'img'
  end

  def long_comment?
    category == 'comment' && content.length >= 75
  end

  def short_comment?
    category == 'comment' && content.length < 75
  end

end
