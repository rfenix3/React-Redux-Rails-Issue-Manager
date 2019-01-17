class CreateIssues < ActiveRecord::Migration[5.2]
  def change
    create_table :issues do |t|
      t.string :status
      t.string :owner 
      t.datetime :created
      t.integer :effort
      t.datetime :completionDate
      t.string :title
      t.integer :votes, default: 0
    end
  end
end
