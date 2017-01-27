# Our Map class should have the following instance methods: assign(key, value),
#lookup(key), remove(key), show. Note that the assign method can be used to either
#create a new key-value pair or update the value for a pre-existing key. It's up
#to you to check whether a key currently exists!

class Map

  def initialize
    @ivar = []
  end

  def keys
    @ivar.map { |key, val| key }
  end

  def values
    @ivar.map { |key, val| val }
  end

  def assign(key, value)
    key_index = keys.index
    if key_index.nil?
      @ivar << [key, value]
    else
      @ivar[key_index] = [key, value]
    end
  end

  def lookup(key)
    keys.include?(key)
  end

  def remove(key)
    key_index = keys.index
    @ivar.delete(key_index)
  end
end
