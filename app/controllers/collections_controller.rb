class CollectionsController < ApplicationController
  def index
    @collections = Collection.order('title ASC')
  end

  def show
    @collection = Collection.find(params[:id])
  end
end
