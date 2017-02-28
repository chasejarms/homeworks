// #arguements

const mySum = function() {
  let start = 0;
  let nums = Array.from(arguments);
  for(let i = 0; i < nums.length; i++) {
    start += nums[i];
  }
  return start;
};
//rest op

const restSum = function(...args) {
  let start = 0;
  for(let i = 0; i < args.length; i++) {
    start += args[i];
  }
  return start;

};

// myBind

Function.prototype.myBind = function(context, ...args) {
  return (...newArgs) => this.apply(context, args.concat(newArgs));
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// // true
//
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true


//curriedSum

const curriedSum = function(numArgs) {
  let numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    if(numbers.length === numArgs) {
      return mySum(...numbers);
    }
    else {
      return _curriedSum;
    }
  };
};

Function.prototype.curry = function(numArgs) {
  let that = this;
  let numbers = [];
  return function _curried(num) {
    numbers.push(num);
    if(numbers.length >= numArgs) {
      return that.call(that, ...numbers);
    }
    else {
      return _curried;
    }
  };
};
Function.prototype.otherCurry = function(numArgs) {
  let that = this;
  let numbers = [];
  return function _curried(num) {
    numbers.push(num);
    if(numbers.length >= numArgs) {
      return that.apply(that, numbers);
    }
    else {
      return _curried;
    }
  };
};
