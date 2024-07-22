import React, { useState } from "react";
import "./FormStyles.css";
import fFiles from "../CharacterFiles.json";
import { FormSection } from "./FormSection.js";

export default function CreateCharacter() {
  const [isMulticlassed, setIsMulticlassed] = useState(false);
  const [character, setCharacter] = useState({});
  const [file, setFile] = useState([]);
  let fileLoad = JSON.parse(JSON.stringify(fFiles));
  let check = Object.entries(character).length;

  if (check !== 0) {
    for (let x in fileLoad) {
      if (character.username === fileLoad[x].username) {
        let len = fileLoad[x].character.length;
        character.character[0].id = len + 1;
        fileLoad[x].character.push(character.character[0]);
        break;
      }
       else {
        fileLoad.push(character);
      }
    }
  }
  console.log(fileLoad);

  return (
    <div className="listInfo">
      <FormSection
        isMulticlassed={isMulticlassed}
        onisMulticlassedChange={setIsMulticlassed}
        setCharacter={setCharacter}
        setFile={setFile}
      />
    </div>
  );
}