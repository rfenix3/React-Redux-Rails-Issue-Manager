class Employee < ApplicationRecord
    validates :name, :department, presence: true
    validates :name, uniqueness: true

    # has_many :issues, inverse_of: :employee
    # has_many :users, :through => :issues
end
