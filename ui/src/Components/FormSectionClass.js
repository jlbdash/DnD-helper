import React from 'react';
import { classValidation, levelValidation } from '../validations/validations';

// class name and level for one row

const Row = ({number, isChanger, setChanger, busy}) => {
  let num = number - 1;
  return (
    <>
      <label className="spacedType">
        <div>{'Class: '}</div>
        <div id={`errorC${number}`} className="error"></div>
        <div id="errorCL" className="error"></div>
      </label>
      <input
        type="text"
        id={`cClass${number}`}
        name={`cClass${number}`}
        placeholder="Character Class"
        onChange={(e) => {
          setChanger(e.target.value);
          classValidation(e.target.value, number);
        }}
        required
      ></input>
      <input
        type="number"
        id={`cLevel${number}`}
        name={`cLevel${number}`}
        min="1"
        max="20"
        value={busy[num]}
        placeholder="1"
        onChange={(e) => {
          busy[num] = e.target.value;
          levelValidation(busy, number);
        }}
      ></input>
    </>
  );
};


// counter for number of different class rows
export const Classes = ({ classNumber, classer, setClasser }) => {
  let busy = Array(8);

  let classInput = [<Row key={1} number={1} isChanger={classer} setChanger={setClasser} busy={busy}  />];
  
  let x = 1;
  while (x < classNumber) {
    classInput.push(<Row key={x + 1} number={x + 1} isChanger={classer} setChanger={setClasser} busy={busy} />);
    x++;
  }

  return classInput;
};
