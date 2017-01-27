class Stack
  def initialize
    @current_stack = []
  end

  def add(el)
    @current_stack << el
  end

  def remove
    # removes one element from the stack
    @current_stack.pop
  end

  def show
    # return a copy of the stack
    @current_stack
  end
end
