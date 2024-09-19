import React, { useState } from 'react';
import fFiles from '../CharacterFiles.json';
import { Classes } from './FormSectionClass.js';
import { classPlanner } from './ClassPlanner.js';
import { Input } from '../Components/InputFormSection.js';
import './FormStyles.css';
import {
  usernameValidation,
  nameValidation,
  raceValidation,
} from '../Validations/validations.js';

//, nameValidation, classValidation, levelValidation, raceValidation}
// options for the selection of multiclassing
const options = (
  <>
    <option defaultValue="0">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
  </>
);

function submitter(character) {
  let fileLoad = fFiles;
  let checkFileLength = fFiles.length;
  console.log('File check');
  console.log(character);
  if (checkFileLength !== 0) {
    let x = 0;
    while (x <= checkFileLength) {
      if (x > checkFileLength - 1) {
        fileLoad.push(character);
        console.log('Before Break 1');
        break;
      } else if (character.username === fileLoad[x].username) {
        console.log(fileLoad[x]);
        let len = fileLoad[x].character.length;
        character.character[0].id = len + 1;
        fileLoad[x].character.push(character.character[1]);
        break;
      } else {
        x++;
      }
    }
  } else {
    console.log('Pushed Character');
    //   fileLoad.push(character);
    //   fetch('http://localhost:4000/write', {
    //     method: 'POST',
    //     body: fileLoad,
    //     headers: { 'Content-Type': 'application/json' },
    //   });
  }

  // fileLoad = JSON.stringify(fileLoad);
  // if (fileLoad !== fFiles) {
  //   fetch('http://localhost:4000/push', {
  //     method: 'POST',
  //     body: JSON.stringify(character),
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  // }
}

// creates the form for Character Creation
export function FormSection({ isMulticlassed, onisMulticlassedChange }) {
  const [classNumber, setClassNumber] = useState(1);
  const [character, setCharacter] = useState({});
  const [isUser, setIsUser] = useState('');
  const [isName, setIsName] = useState('');
  const [isRace, setIsRace] = useState('');

  let section = (
    <form
      id="characterCreation"
      onsubmit="return false"
      autoComplete="off"
      method="POST"
    >
      <Input
        label="Username: "
        type="text"
        placeholder="Username"
        inputText={isUser}
        setInputText={setIsUser}
        required
        validation={usernameValidation}
      />
      <Input
        label="Character Name: "
        type="text"
        placeholder="Character Name"
        inputText={isName}
        setInputText={setIsName}
        required
        validation={nameValidation}
      />
      <br />
      <label style={{ display: 'inline' }}>
        {'Multiclassing:'}
        <input
          type="checkbox"
          checked={isMulticlassed}
          onChange={(e) => {
            onisMulticlassedChange(e.target.checked);
            setClassNumber(1);
          }}
        ></input>
      </label>
      &nbsp;
      {isMulticlassed && (
        <label style={{ display: 'inline' }}>
          {'Add Classes: '} &nbsp;
          <span>
            <select
              id="add"
              required
              name="add"
              disabled={!isMulticlassed}
              onChange={(e) => {
                setClassNumber(e.target.value);
              }}
            >
              {options}
            </select>
          </span>
        </label>
      )}
      <Classes classNumber={classNumber} required />
      <Input
        label="Race: "
        type="text"
        placeholder="Character Race"
        inputText={isRace}
        setInputText={setIsRace}
        required
        validation={raceValidation}
      />
      <br />
      <input
        type="submit"
        id="submit"
        value="Submit"
        onClick={(e) => {
          e.stopPropagation();
          classPlanner(classNumber, setCharacter, isUser, isName, isRace);
          submitter(character);
        }}
      ></input>
    </form>
  );

  return <>{section}</>;
}
