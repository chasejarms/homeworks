require 'byebug'

class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = place_stones
    @name1 = name1
    @name2 = name2
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    Array.new(14).map.with_index do |current, idx|
      idx == 6 || idx == 13 ? [] : [:stone, :stone, :stone, :stone]
    end
  end

  def valid_move?(start_pos)
    if start_pos <= 0 || start_pos > 13 || start_pos == 6
      raise "Invalid starting cup"
    end
  end

  def make_move(start_pos, current_player_name)
    # next five lines are for testing only
    puts "Start position is #{start_pos}"
    puts "Current player name is #{current_player_name}"
    puts "This is #{player_side(current_player_name)}"
    puts "Initial board state is the following"
    render
    stones_to_place = @cups[start_pos].count
    idx_to_skip = current_player_name == @name1 ? 13 : 6
    ending_idx = distribute_stones(start_pos, idx_to_skip, stones_to_place)
    @cups[start_pos] = []
    # recomment in this line after finishing testing
    # render
    next_turn(ending_idx)
    decide_next_move(ending_idx, current_player_name)
  end

  def player_side(current_player_name)
    @name1 ? (0..6).to_a : (7..13).to_a
  end

  def decide_next_move(ending_idx, current_player_name)
    # next three lines are for testing only
    puts "The final board state is the following"
    puts "The ending index is #{ending_idx}"
    render

    player_side = player_side(current_player_name)
    # debugger if current_player_name == "James"
    if player_side.last == ending_idx - 1
      :status
    end

  end

  def distribute_stones(start_pos, idx_to_skip, stones_to_place)
    place_stone_idx = start_pos + 1
    until stones_to_place == 0
      if place_stone_idx != idx_to_skip
        @cups[place_stone_idx] << :stone
        stones_to_place -= 1
      end
      place_stone_idx == 13 ?  place_stone_idx = 0 : place_stone_idx += 1
    end
    place_stone_idx == 0 ? 13 : place_stone_idx - 1
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end
