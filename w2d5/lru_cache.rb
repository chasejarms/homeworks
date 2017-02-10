class LRUCache
  def initialize(max_size)
    @queue = []
    @max_size = max_size
  end

  def add(el)
    # adds element to cache according to LRU principle
    idx = already_existing_index(el)
    if max_size? && idx
      if existing_index.nil? # AND the element doesn't already exist
        shift_off_oldest
      else # AND the element does exist
        get_rid_of_el(idx)
      end
    else # the queue is not yet full
      if existing_index.nil? # AND the element doesn't already exist
      else
        get_rid_of_el(idx)
      end
    end
    @queue << el
  end

  def show
    # shows the items in the cache, with the LRU item first
    p @queue
  end

  private

  def max_size?
    @queue.count == @max_size
  end

  def already_existing_index(el)
    @queue.index(el)
  end

  def shift_off_oldest
    @queue.shift
  end

  def get_rid_of_el(index)
    @queue.delete_at(index)
  end

end
