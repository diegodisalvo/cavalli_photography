class Photo < ActiveRecord::Base
  belongs_to :collection
  belongs_to :author
end
