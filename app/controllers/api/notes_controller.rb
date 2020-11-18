class Api::NotesController < ApplicationController

    def index
        @notes = current_user.notes
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
        if @post.update(note_params) 
            render json: ["All changes saved"]
        end
    end

    def destroy
        @note = current_user.notes.find(params[:id])
        if @note && @note.delete
            render json: ["moved to trash"]
        end
    end

    # private
    # def notes_params
    # end
end
