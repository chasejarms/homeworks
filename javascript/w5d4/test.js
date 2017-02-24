class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    let date = new Date();
    this.hours = date.getHours();
    this.mins = date.getMinutes();
    this.secs = date.getSeconds();
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.mins}:${this.secs}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.secs += 1;
    if (this.secs === 60) {
      this.mins += 1;
      this.secs = 0;
    }
    else if (this.mins === 60) {
      this.hours += 1;
      this.mins = 0;
    }
    this.printTime();
  }
}

// const clock = new Clock();
// setInterval(clock._tick.bind(clock), 1000);

// setInterval(clock._tick, 1000);
const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const addNumbers = (sum, numsLeft, completionCallback) => {
//   console.log(`Current sum is ${sum}.`);
//   if (numsLeft > 0) {
//     reader.question("What is your number?", (number) => {
//       sum += parseInt(number);
//       addNumbers(sum, numsLeft - 1, completionCallback);
//     });
//   } else {
//     completionCallback(sum);
//     reader.close();
//   }
// };

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

const askIfGreaterThan = (el1, el2, callback) => {
  reader.question(`Is ${el1} greater than ${el2}?`, (response) => {
    if (response === 'yes') {
      callback(true);
    }
    else {
      callback(false);
    }
    // reader.close();
  });
};



// askIfGreaterThan(1, 2, function (bool) {
//   if (bool) {
//     console.log("This is true");
//   }
//   else {
//     console.log("This is false");
//   }
// });



const innerBubbleSortLoop = (arr, i, madeAnySwaps, outerBubbleSortLoop) => {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
      let madeChange = (isGreaterThan || madeAnySwaps) ? true : false;
      innerBubbleSortLoop(arr, i + 1, madeChange, outerBubbleSortLoop);
    });
  } else if (i === (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
    // reader.close();
  }
};

// innerBubbleSortLoop([2,1,3], 0, false, function(madeAnySwaps) {
//   if (madeAnySwaps) {
//     console.log("You're inside of outerBubbleSortLoop and you made changes");
//   } else {
//     console.log("You're inside of outerBubbleSortLoop and you didn't make any changes");
//   }
// });



const absurdBubbleSort = (arr, sortCompletionCallback) => {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
};

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });


Function.prototype.myBind = function (context) {
  return () => this.apply(context);
};


class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

name = "light";

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
