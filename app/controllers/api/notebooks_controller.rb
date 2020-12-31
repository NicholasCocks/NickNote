class Api::NotebooksController < ApplicationController
    def index
        @notebooks = current_user.notebooks.order("title DESC")
        render 'api/notebooks/index'
    end

    def create
        @notebook = Notebook.new(notebooks_params)
        @notebook.author_id = current_user.id
        if @notebook.save
            render 'api/notebooks/show'
        end
    end

    def update

        @notebook = current_user.notebooks.find(params[:id])
        if @notebook.update(notebooks_params) 
            render 'api/notebooks/show'
        end
    end

    def destroy
        @notebook = current_user.notebooks.find(params[:id])
        if @notebook && @notebook.delete
            render json: ["notebook has been deleted"]
        end
    end

    private
    def notebooks_params
        params.require(:notebook).permit(:title)
    end
end
