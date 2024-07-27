import React, { useState } from "react";
import fFiles from "../CharacterFiles.json";
import { Classes } from "./FormSectionClass.js";
import { classPlanner } from "./ClassPlanner.js";
import "./FormStyles.css";

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
    // fetch("http://localhost:4000/write", {
    //   method: "POST",
    //   body: fileLoad,
    //   headers: { "Content-Type": "application/json" },
    // });
    fetch("http://localhost:4000/push", {
      method: "POST",
      body: JSON.stringify(character),
      headers: { "Content-Type": "application/json" },
    });
  }
}

// creates the form for Character Creation
export function FormSection({ isMulticlassed, onisMulticlassedChange }) {
  const [classNumber, setClassNumber] = useState(1);
  const [character, setCharacter] = useState({});
  const [isUser, setIsUser] = useState("");
  const [isName, setIsName] = useState("");
  const [isRace, setIsRace] = useState("");

  let section = (
    <form
      name="characterCreation"
      onSubmit={(e) => {
        e.preventDefault();
        submitter(character);
      }}
    >
      <label>
        {"Username: "}
        <input
          type="text"
          required
          value={isUser}
          onChange={(e) => setIsUser(e.target.value)}
          placeholder="Username"
        ></input>
      </label>{" "}
      <br />
      <label>
        {"Character Name:"}
        <input
          type="text"
          required
          value={isName}
          onChange={(e) => setIsName(e.target.value)}
          placeholder="Character Name"
        ></input>
      </label>
      <br />
      <label>
        {"Multiclassing:"}
        <input
          type="checkbox"
          checked={isMulticlassed}
          onChange={(e) => {
            onisMulticlassedChange(e.target.checked);
            setClassNumber(1);
          }}
        ></input>
      </label>{" "}
      &nbsp;{" "}
      {isMulticlassed && (
        <label>
          {"Add Classes: "}
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
      <br />
      <Classes classNumber={classNumber} />
      <br />
      <label>
        {"Race:"}
        <input
          type="text"
          required
          value={isRace}
          onChange={(e) => setIsRace(e.target.value)}
          placeholder="Character Race"
        ></input>
      </label>
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
