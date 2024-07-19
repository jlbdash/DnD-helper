import React, { useState } from "react";
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

const submitter = async () => {
  fetch('http://localhost:4000/submit/');
  window.location.reload();
}


// creates the form for Character Creation
export function FormSection({
  isMulticlassed,
  onisMulticlassedChange,
  setCharacter,
}) {
  const [classNumber, setClassNumber] = useState(1);
  const [isUser, setIsUser] = useState("");
  const [isName, setIsName] = useState("");
  const [isClass, setIsClass] = useState([]);
  const [isRace, setIsRace] = useState("");

  let section = (
    <form
      name="characterCreation"
      onSubmit={(e) => {
        classPlanner(classNumber, setIsClass);
        setCharacter({
          username: isUser,
          character: [
            {
              id: 1,
              name: isName,
              class: isClass,
              race: isRace,
              alive: true,
            },
          ],
        });
        submitter;
        e.preventDefault();
        console.log(isClass);
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
      <input type="submit" id="submit" value="Submit"></input>
    </form>
  );

  return <>{section}</>;
}
