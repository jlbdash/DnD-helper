import React from 'react';
import { ProductCategoryRow, ProductRow } from './searchRows.js';

// creates the static list of food
export function ProductTable({ characters, isAlive, searchText }) {
  const characterList = characters;
  console.log(characters)
  const rows = [];
  characterList.forEach((user) => {
    const charrie = user.character;

    rows.push(<ProductCategoryRow key={user.name} user={user} />);
    charrie.forEach((character) => {
      if (
        character['name'].toLowerCase().indexOf(searchText.toLowerCase()) === -1 &&
        character['race'].toLowerCase().indexOf(searchText.toLowerCase()) === -1
      ) {
        return;
      }

      if (isAlive && !character.alive) {
        return;
      }

      rows.push(
        <ProductRow key={user.username + character.id} character={character} />
      );
    });
  });

  return (
    <>
      <table style={{ width: '100%' }}>
        <thead key={'header'}>
          <tr key={'rowheader'}>
            <th key={'header1'} style={{ width: '35%' }}> Character </th>
            <th key={'header2'} style={{ width: '40%' }}> Class</th>
            <th key={'header3'}style={{ width: '25%' }}> Race</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}
