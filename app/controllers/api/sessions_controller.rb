class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    
        if @user
          login(@user)
          render "api/users/show"
        else
          render json: ["Invalid username or password combination"]
        end

    end
    
      def destroy
        @user = current_user

        if @user
          logout
          render "api/users/show"
        else
          render json: ["Noone to Logout"]
        end

    end
end
