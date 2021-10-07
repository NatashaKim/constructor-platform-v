class CreateOscillators < ActiveRecord::Migration[6.1]
  def change
    create_table :oscillators do |t|
      t.string :frequency, default: 440
      t.string :integer

      t.timestamps
    end
  end
end
