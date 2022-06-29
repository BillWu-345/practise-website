class CreateMainMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :main_messages do |t|
      t.string :name
      t.text :message

      t.timestamps
    end
  end
end
