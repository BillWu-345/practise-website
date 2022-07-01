class CreateSandwiches < ActiveRecord::Migration[7.0]
  def change
    create_table :sandwiches do |t|
      t.string :bread
      t.string :cheese
      t.string :meat

      t.timestamps
    end
  end
end
