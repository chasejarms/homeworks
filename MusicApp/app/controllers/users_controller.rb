class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      # login!(user)
      redirect_to user_url(@user)
    else
      flash.now[:notice] = "Invalid credentials."
      render :new
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    if @user
      redirect_to users_url
    else
      flash[:notice] = ["You can't log out until you log in"]
      redirect_to new_session_url
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    redirect_to new_users_url unless logged_in?
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
