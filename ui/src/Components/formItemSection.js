import React, { useState } from 'react';
import fFiles from '../ItemFiles.json';
import {
  nameValidation,
  raceValidation,
  usernameValidation,
} from '../validations/validations.js';
import { classPlanner } from './formClassPlanner.js';
import { Input, TextArea, Submit } from './formComponentsSection.js';

function submitter(newItem) {
  let fileLoad = fFiles;
  let checkFileLength = fFiles.length;
  console.log('File check');
  // if more than one entry, continue; else push Item
  if (checkFileLength !== 0) {
    let x = 0;
    while (x <= checkFileLength) {
      // end of file, no match, push Item
      if (x > checkFileLength - 1) {
        fileLoad.push(newItem);
        console.log('Before Break 1');
        break;
      }
      // Item username match, either update class or add Item
      else if (newItem.username === fileLoad[x].username) {
        console.log('Updating Break');
        let len = fileLoad[x].item.length;
        newItem.item[0].id = len + 1;
        for (let itemX = 0; itemX < len; x++) {
          if (
            fileLoad[x].item[itemX]['name'] ===
            newItem.item[0]['name']
          ) {
            fileLoad[x].item[itemX]['class'] =
              newItem.item[0]['class'];
            break;
          }
        }
        break;
      } else {
        x++;
      }
    }
  } else {
    fileLoad.push(newItem);
  }

  console.log(fileLoad);
  fetch('http://localhost:4000/write', {
    method: 'POST',
    body: JSON.stringify(fileLoad),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log('Pushed Item');

  fileLoad = JSON.stringify(fileLoad);
  if (fileLoad !== fFiles) {
    fetch('http://localhost:4000/push', {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// creates the form for Item Creation
export function FormItemSection({ isOwned, onisOwnedChange }) {
  const [classNumber, setClassNumber] = useState(1);
  const [item, setItem] = useState({});
  const [isItem, setIsItem] = useState('');
  const [isName, setIsName] = useState('');
  const [isEffect, setIsEffect] = useState('');

  let section = (
    <form
      id="itemCreation"
      autoComplete="off"
      method="POST"
      onSubmit={(e) => {
        e.preventDefault();
        submitter(item, setItem);
      }}
    >
      <Input
        label="Item: "
        type="text"
        placeholder="Item: "
        inputText={isItem}
        setInputText={setIsItem}
        required
        validation={usernameValidation}
      />{' '}
      <br />
      <label style={{ display: 'inline' }}>
        {'With someone specific:'}
        <input
          type="checkbox"
          checked={isOwned}
          onChange={(e) => {
            onisOwnedChange(e.target.checked);
            setClassNumber(1);
          }}
        ></input>
      </label>
      &nbsp;
      {isOwned && (
        <Input
          label="Character Name: "
          type="text"
          placeholder="Character Name"
          inputText={isName}
          setInputText={setIsName}
          required
          validation={nameValidation}
        />
      )}
      <br />
      <TextArea
        label="Effect: "
        type="text"
        placeholder="Effect"
        inputText={isEffect}
        setInputText={setIsEffect}
        required
        validation={raceValidation}
      />
      <br />
      <Submit
        type="submit"
        id="submit"
        value="Submit"
        onClick={() => {
          classPlanner([classNumber, setCharacter, isItem, isName, isEffect]);
        }}
      ></Submit>
    </form>
  );

  return <>{section}</>;
}
