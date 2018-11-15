class Issue < ApplicationRecord
  validates :title, :created, presence: true
  validates :effort, numericality: {only_integer: true, allow_nil: true}

  # belongs_to :user
  # belongs_to :employee
  # validates :user, :employee, presence: true

  scope :order_by_latest, -> { order(created: :desc) }
  scope :order_by_effort, -> { order(effort: :asc) }
    
  # scope :created_before, ->(time) { where("created -  <= ?", time) }


end
