class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:session][:email],
      params[:session][:password]
    )
    if @user
      login!(@user)
      redirect_to user_url(@user)
    else
      flash.now[:notice] = ["Invalid credentials"]
      render :new
    end
  end

  def destroy
    
  end
end
