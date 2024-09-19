import React from 'react';
import { classValidation, levelValidation } from '../Validations/validations';

// class name and level for one row

// counter for number of different class rows
export const Classes = ({ classNumber }) => {
  let busy = Array(8);
  const Row = (number) => {
    let num = number.number - 1;
    return (
      <>
        <label className="spacedType">
          <div>{'Class: '}</div>
          <div id={`errorC${number.number}`} className="error"></div>
          <div id="errorCL" className="error"></div>
        </label>
        <input
          type="text"
          id={`cClass${number.number}`}
          name={`cClass${number.number}`}
          onChange={(e) => {
            classValidation(e.target.value, number.number);
          }}
          placeholder="Character Class"
          required
        ></input>
        <input
          type="number"
          id={`cLevel${number.number}`}
          name={`cLevel${number.number}`}
          min="1"
          max="20"
          onChange={(e) => {
            busy[num] = e.target.value;
            levelValidation(busy, number.number);
          }}
        ></input>
      </>
    );
  };

  const classInput = [<Row key={1} number={1} start />];

  let x = 1;
  while (x < classNumber) {
    classInput.push(<Row key={x + 1} number={x + 1} />);
    x++;
  }

  return classInput;
};
