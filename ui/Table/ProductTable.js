import React from "react";
import {ProductRow, ProductCategoryRow} from './SearchRows.js';
import "./TableStyles.css";

// creates the static list of food
export function ProductTable({ products, isAlive, searchText }) {
  const count = null;
  let characterList = products;
  let rows = [];
  characterList.forEach((user) => {
    const charrie = user.character;

    rows.push(<ProductCategoryRow key={user.name} user={user} />);
    charrie.forEach((character) => {
      if (
        character.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1 &&
        character.race.toLowerCase().indexOf(searchText.toLowerCase()) === -1
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
      <table style={{ width: "100%" }}>
        <thead>
          <tr key={'header'}>
            <th key={'header1'} style={{ width: "20%" }}> Character </th>
            <th key={'header2'} style={{ width: "50%" }}> Class</th>
            <th key={'header3'}style={{ width: "30%" }}> Race</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}
