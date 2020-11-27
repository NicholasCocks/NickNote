class Api::NotesController < ApplicationController

    def index
        @notes = current_user.notes.order("updated_at DESC")
        render 'api/notes/index'
    end

    def show
        @note = current_user.notes.find(params[:id])
        render 'api/notes/show'
    end

    def create
        @note = Note.new(notes_params)
        @note.author_id = current_user.id
        if @note.save
            render 'api/notes/show'
        end
    end

    def update
        
        @note = current_user.notes.find(params[:id])
        if @note.update!(notes_params) 
            render 'api/notes/show'
        else 
            render json: [@note.errors.full_messages]
        end
    end

    def destroy
        @note = current_user.notes.find(params[:id])
        if @note && @note.delete
            render json: ["note has been deleted"]
        end
    end

    def tags_with_note
        @note = current_user.notes.find(params[:note_id])
        @tags = @note.tags
        render 'api/tags/tagged'
    end

    private
    def notes_params
        params.require(:note).permit(:id, :title, :body, :notebook_id, :trashed)
    end
end
