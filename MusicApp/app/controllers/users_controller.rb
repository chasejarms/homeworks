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
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
