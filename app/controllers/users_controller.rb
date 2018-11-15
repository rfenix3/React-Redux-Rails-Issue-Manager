class UsersController < ApplicationController
  #before_action :require_admin, only: [:index, :destroy, :delete]

  def index
    @users = User.all
    render json: @users, status: 200 #added this for API display 
  end 

  def show
    @user = User.find(params[:id])
  end

  def new
    # only Admin can create new user when logged in
    # logged-in users will not have access to new and create methods
    if current_user && current_user.role != "Admin"
      redirect_to user_path(current_user)
    else
      @user = User.new
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      #byebug
      if !current_user.nil? && current_user.role === "Admin" 
        # Admin is redirected to users index after creating a user.
        redirect_to users_path
      else
        session[:user_id] = @user.id
        redirect_to user_path(@user), notice: "Welcome to Issue Manager!"
      end
    else
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to @user, notice: 'User was successfully updated.'
    else
      render :edit
    end
  end

  def delete
    #byebug
    @user = User.find(params[:id])
  end

  def destroy
    @user = User.find(params[:id])
    if @user.delete
    #current_user should be Admin at this point since only Admin should have access to destroy method
    redirect_to users_path(current_user)   
    else
      #byebug
      render :delete
    end

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_user
    #   @user = User.find(params[:id])
    # end

    def require_admin
      #byebug
      redirect_to user_path(current_user) unless current_user.role === "Admin"
    end

    def user_params
      params.require(:user).permit(
        :name,
        :password,
        :role
      )
    end


end

