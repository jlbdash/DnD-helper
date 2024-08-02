'use strict';

import React, { useState } from "react";
import "./TableStyles.css";
import Files from "../CharacterFiles.json";
import SearchButton from './Search.js';
import { ProductTable } from './ProductTable.js';

export default function SearchApp() {
  const [searchText, setSearchText] = useState("");
  const [isAlive, setisAlive] = useState(false);
  const characters = [];

  for (let i = 0; i < Files.length; i++) {
    characters.push(Files[i]);
  }
  return (
    <div className="listInfo">
      <SearchButton
        isAlive={isAlive}
        searchText={searchText}
        onSearchTextChange={setSearchText}
        onisAliveChange={setisAlive}
      />
      <ProductTable
        characters={characters}
        isAlive={isAlive}
        searchText={searchText}
      />
    </div>
  );
}
