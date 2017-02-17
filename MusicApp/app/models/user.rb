class User < ActiveRecord::Base
  before_validation :set_session_token
  validates(
    :email,
    :session_token,
    :password_digest,
    presence: true)

  validates(
    :email,
    :session_token,
    uniqueness: true
  )

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.generate_session_token
    SecureRandom.base64(16)
  end

  def set_session_token
    self.session_token = User.generate_session_token
  end

end
