class PhotosController < ApplicationController
  def index
    @photos = Photo.where(:collection_id => :id)
  end
end
