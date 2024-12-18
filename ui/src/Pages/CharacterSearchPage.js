import React, { useState } from 'react';
import Files from '../CharacterFiles.json';
import { ProductTable } from '../Components/productTable.js';
import SearchButton from '../Components/searchButton.js';

export default function CharacterSearchPage() {
  const [searchText, setSearchText] = useState('');
  const [isAlive, setisAlive] = useState(false);
  const characters = [];

  for (let i = 0; i < Files.length; i++) {
    characters.push(Files[i]);
  }
  return (
      <section>
        <div className="listInfo">
          <SearchButton
            searchable={isAlive}
            searchText={searchText}
            onSearchTextChange={setSearchText}
            onSearchableChange={setisAlive}
            formName={'charactersListed'}
            displayText={'Only show alive characters'}
          />
          <ProductTable
            characters={characters}
            isAlive={isAlive}
            searchText={searchText}
          />
        </div>
      </section>
  );
}
