import React, { useState } from 'react';
import fFiles from '../CharacterFiles.json';
import { Classes } from './FormSectionClass.js';
import { classPlanner } from './ClassPlanner.js';
import { Input } from './InputFormSection.js';
import './FormStyles.css';
import { nameValidation } from '../Validations/validations.js';

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
  let check = fFiles.length;

  if (check !== 0) {
    let x = 0;
    while (x <= check) {
      if (x > fileLoad.length - 1) {
        fileLoad.push(character);
        break;
      } else if (character.username === fileLoad[x].username) {
        let len = fileLoad[x].character.length;
        character.character[0].id = len + 1;
        fileLoad[x].character.push(character.character[0]);
        break;
      } else {
        x++;
      }
    }
  } else {
    fileLoad.push(character);
  }

  fileLoad = JSON.stringify(fileLoad);
  if (fileLoad !== fFiles) {
    fetch('http://localhost:4000/push', {
      method: 'POST',
      body: JSON.stringify(character),
      headers: { 'Content-Type': 'application/json' },
    });
  }
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
        onSubmit={(e) => {
          (e) => setInputText(e.target.value)
          e.preventDefault();
          submitter(character);
        }}
        autoComplete="off"
        method='post'
      >
        <Input
          label="Username: "
          type="text"
          placeholder="Username"
          inputText={isUser}
          setInputText={setIsUser}
          required
          validation={nameValidation}
        />
        <Input
          label="Character Name: "
          type="text"
          inputText={isName}
          setInputText={setIsName}
          placeholder="Character Name"
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
        <Classes classNumber={classNumber} />
        <Input
          label="Race: "
          type="text"
          value={isRace}
          setValue={setIsRace}
          placeholder="Character Race"
        />
        <br />
        <input
          type="submit"
          id="submit"
          value="Submit"
          onClick={() => {
            classPlanner(classNumber, setCharacter, isUser, isName, isRace);
          }}
        ></input>
      </form>
  );

  return <>{section}</>;
}
