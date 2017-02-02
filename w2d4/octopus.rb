require 'byebug'

fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhh']

def sluggish_octopus(arr)
  greatest = nil
  arr.each_with_index do |el, idx|
    arr.each_with_index do |el2, idx2|
      next if idx == idx2
      if greatest.nil? || el.length > greatest.length && el.length > el2.length
        greatest = el
      end
    end
  end
  greatest
end

def dominant_octopus(arr)
  sorted = merge_octopus(arr)
  sorted.last
end

def merge_octopus(arr)
  return arr if arr.count <= 1
  mid_point = arr.count / 2
  left = merge_octopus(arr[0...mid_point])
  right = merge_octopus(arr[mid_point..-1])

  merge_octopus_arr(left, right)
end

def merge_octopus_arr(left, right)
  sorted = []
  until left.empty? || right.empty?
    debugger
    if left.first.length < right.first.length
      sorted << left.shift
    else
      sorted << right.shift
    end
  end

  sorted + left + right
end

def clever_octopus

end
