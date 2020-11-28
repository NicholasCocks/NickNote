class Api::TaggablesController < ApplicationController
    def index
        @taggables = current_user.taggables
        render 'api/taggables/index'
    end

    def create
        @taggable = Taggable.new
        @taggable.note_id = params[:note][:id]
        @taggable.tag_id = params[:tag][:id]
        @taggable.author_id = current_user.id
        if @taggable.save!
            render 'api/taggables/show'
        end
    end

    def destroy

    end

    def taggable_params
        params.require(:tag).permit(:id, :title)
    end

end