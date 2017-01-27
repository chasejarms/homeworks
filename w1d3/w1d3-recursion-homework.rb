def sum_to(n)
  n < 0 ? nil : n == 0 ? 0 : n + sum_to(n - 1)
end

def add_numbers(arr)
  arr.empty? ? nil : arr.count == 1 ? arr[0] : arr[0] + add_numbers(arr.slice(1..-1))
end

def gamma_fnc(n)
  n == 0 ? nil : n == 1 ? 1 : (n - 1) * gamma_fnc(n - 1)
end

def upcase(str)
  return str.upcase if str.length <= 1
  str[0].upcase + upcase(str[1..-1])
end

def reverse(str)
  return str[0] if str.length <= 1
  reverse(str[1..-1]) + str[0]
end

def reverse(str)
  return str[-1] if str.length <= 1
  str[-1] + reverse(str[0..-2])
end
