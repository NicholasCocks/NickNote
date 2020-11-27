class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            notebook = Notebook.create({title: 'First Notebook', author_id: @user.id, first_notebook: true})
            note = Note.create({title: 'My First Note', body: 'Welcome To Nicknote!', author_id: @user.id, notebook_id: notebook.id})
            render 'api/users/show'
        else
            render json: [ @user.errors.full_messages ], status: 401
            # render :json => { :errors => @model.errors }
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end

end
