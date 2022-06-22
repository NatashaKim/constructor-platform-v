class Email < ApplicationRecord
		validates :address, :presence => true,
											:length => { :minimum => 5 }
end
