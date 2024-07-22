import React from 'react';

// Row User Header
export function ProductCategoryRow({ user }) {
    return (
      <tr key={user.username}>
        <td className="categoryStyle" colSpan="3">
          {user.username}
        </td>
      </tr>
    );
  }
  
  // Row Character Info
  export function ProductRow({ character }) {
    const multiClass = character.class;
    let count = character.class.length;
    let classes = [];
    let rows = [];
  
    const characterName = character.alive ? (
      character.name
    ) : (
      <div style={{ color: "red" }}>{character.name}</div>
    );
  
    for (let i of multiClass) {
      let combo = [];
      for (let m in i) {
        combo += i[m];
        if (m === "multi") {
          combo += ": ";
        }
      }
      classes.push(<td key={character.name + i["multi"]}>{combo}</td>);
    }
  
    let i = 0;
    const start = rows.push(
      <tr key={character.id+"-"+i}>
        <td rowSpan={count} key={character.name}> {characterName}</td>
        {classes[i]}
        <td key={character.race} rowSpan={count}>
          {character.race}
        </td>
      </tr>
    );
  
    if (count > 1) {
      while (i < count - 1) {
        start;
        i++;
      }
        rows.push(
          <tr key={character.id+"-"+i}>
            {classes[i]}
          </tr>
        );
    } else {
      start;
    }
  
    return <>{rows}</>;
  }
  