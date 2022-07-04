class CreateSimonsaves < ActiveRecord::Migration[7.0]
  def change
    create_table :simonsaves do |t|
      t.string :savecode
      t.string :savestate

      t.timestamps
    end
  end
end
