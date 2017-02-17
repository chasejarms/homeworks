class ActiveRecord::Base

  # ensures a unique session token is set

  def generate_valid_session_token(field)
    token = SecureRandom.base64(16)

    while self.class.exists?(field => token)
      token = SecureRandom.base64(16)
    end

    token
  end

end

class User < ActiveRecord::Base
  before_validation :ensure_session_token

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

  def self.find_by_session_token(session_token)
    User.find_by(session_token: session_token)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    user && BCrypt::Password.new(user.password_digest).is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = generate_valid_session_token(:session_token)
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password).to_s
  end

  def ensure_session_token
    self.session_token = generate_valid_session_token(:session_token)
  end

end
