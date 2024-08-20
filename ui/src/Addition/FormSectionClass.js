import React, { useState } from 'react';
import { classValidation } from '../Validations/validations';

// class name and level for one row


// counter for number of different class rows
export const Classes = ({ classNumber }) => {
  
  let levelCounter = [];
  let levelCount = 0;
  const error = document.getElementById('errorCharacter Class');
  const Row = (number) => {
    return (
      <>
        <label className="spacedType">
          <div>{'Class: '}</div>
          <div id="errorC" className="error"></div>
        </label>
        <input
          type="text"
          id={`cClass${number.number}`}
          name={`cClass${number.number}`}
          onChange={(e) => classValidation(e.target.value)}
          placeholder="Character Class"
          required
        ></input>
        <input
          type="number"
          id={`cLevel${number.number}`}
          name={`cLevel${number.number}`}
          min="1"
          max="20"
          onChange={(e) => levelCounter.push(e.target.value)}
        ></input>
      </>
    );
  };

  const classInput = [<Row key={1} number={1} start />];


  let x = 1;
  while (x < classNumber) {
    classInput.push(<Row key={x + 1} number={x + 1}/>);
    x++;
  }

  levelCounter.forEach(counter => {
      levelCount += counter;
    });
  if (levelCount > 20) {
    console.log(levelCount);
    error.innerHTML = 'Levels must add to 20';
  }
  return classInput;
};
