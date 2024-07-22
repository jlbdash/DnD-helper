import React, { StrictMode } from "react";
import "./overAllStyle.css";
import { createRoot } from "react-dom/client";
import SearchApp from "./Table/SearchApp.js";
import CreateCharacter from "./Addition/CreateCharacterApp.js";

// loads the Game component with React
const root = createRoot(document.getElementById("root"));
root.render(
  <div style={{display: "flex"}}>
    <StrictMode>
      <CreateCharacter />
      <div style={{width:"50px"}}></div>
      <SearchApp />
    </StrictMode>
  </div>
);
