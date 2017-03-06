import React from 'react';

const ChaseAverage = ({rates}) => {
  let chaseAverage = 0;
  let count = 0;
  for (let prop in rates) {
    chaseAverage += rates[prop];
    count += 1;
  }
  let output;
  if (count === 0) {
    output = 0;
  } else {
    output = chaseAverage / count;
  }
  return (
    <div>Chase's Average: { output }</div>
  );
};

export default ChaseAverage;
