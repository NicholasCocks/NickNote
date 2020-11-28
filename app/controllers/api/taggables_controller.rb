class Api::TaggablesController < ApplicationController
    def index
        @taggables = current_user.taggables
        render 'api/taggables/index'
    end

    def create
  
        @taggable = Taggable.new
        # @taggable.note_id = params[:note_id]
        # @taggable.tag_id = 
    end

    def destroy

    end

    def taggable_params
        params.require(:tag).permit(:id, :title)
    end

end