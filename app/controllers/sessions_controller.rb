class SessionsController < ApplicationController

  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end
  
  def new
    @user = User.new
    #@users = User.all
  end
  
  def create
    # if request.env["omniauth.auth"]
    #   # They login via OAuth
    #   oauth_email = request.env["omniauth.auth"]["info"]["nickname"]
    #   if @user = User.find_by(:name => oauth_email)
    #     session[:user_id] = @user.id
    #     redirect_to user_path(@user), notice: "Welcome back to issue manager!"
    #   else
    #     # Default password is set to 'guest' for Github user
    #     @user = User.new(:name => oauth_email, :password => "guest", :role => "Guest")
    #     if @user.save
    #       session[:user_id] = @user.id
    #       redirect_to user_path(@user), notice: "Welcome back to issue manager!"
    #     else
    #       redirect_to signin_path
    #     end
    #   end
    # else
      # Normal login with user name and password        
      if @user = User.find_by(name: params[:user][:name])
        if @user && @user.authenticate(params[:user][:password])
          session[:user_id] = @user.id
          redirect_to user_path(@user), notice: "Welcome back to issue manager!"
        else
          @user.errors.add(:password, "Username and Password must match or exist")
          render template: "sessions/new"
          #redirect_to sessions_new_path
        end
      else
        @user = User.new
        render template: "sessions/new"
      end
    #end
  end

  private
  def user_params
    params.require(:user).permit(
      :name,
      :password
    )
  end
  
end
  