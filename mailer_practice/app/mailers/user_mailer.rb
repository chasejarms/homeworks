class UserMailer < ApplicationMailer
  default from: "chasejarms@gmail.com"

  def welcome_email(user)
    @user = user
    mail(to: user.username, subject: 'Welcome to My Awesome Site')
  end
end
