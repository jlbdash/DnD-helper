import React from 'react';

let levelCount = 0;
// class name and level for one row
const Row = (number) => (
    <label>
      {'Class:'}
      <input
        type='text'
        id={`cClass${number.number}`}
        name={`cClass${number.number}`}
        onChange={(e) => e.target.value}
        placeholder='Character Class'
      ></input>
      <input
        type='number'
        id={`cLevel${number.number}`}
        name={`cLevel${number.number}`}
        min='1'
        max='20'
        onChange={(e) => e.target.value}
      ></input>
    </label>
);

// counter for number of different class rows
export const Classes = ({ classNumber }) => {
  const classInput = [<Row key={1} number={1} />];

  let x = 1;
  while (x < classNumber) {
    classInput.push(<Row key={x+1} number={x+1} />);
    levelCount+=x;
    if (levelCount>20){
      return error;
    }
    x++;
  }
  return classInput;
};
