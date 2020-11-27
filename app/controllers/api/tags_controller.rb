class Api::TagsController < ApplicationController
    # :index, :show, :create, :destroy, :update
    def index
        @tags = current_user.tags
        render 'api/tags/index'
    end

    def show
        @tag = current_user.tags.find(params[:id])
        render 'api/tags/show'
    end

    def create
        @tag = Tag.new(tags_params)
        @tag.author_id = current_user.id
        if @tag.save
            render 'api/tags/show'
        end
    end

    def update
        @tag = current_user.tags.find(params[:id])
        if @tag.update!(tags_params) 
            render 'api/tags/show'
        else 
            render json: [@tag.errors.full_messages]
        end
    end

    def destroy
        @tag = current_user.tags.find(params[:id])
        if @tag && @tag.delete
            render json: ["note has been deleted"]
        end
    end

    # api_tag_notes_with_tag GET    /api/tags/:tag_id/notes_with_tag(.:format)   
    def notes_with_tag
        @tag = current_user.tags.find(params[:tag_id])
        @notes = @tag.notes
        render 'api/notes/tagged'
    end

    def tags_params
        params.require(:tag).permit(:title, :tag_id)
    end
end