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
  
    //is character alive?
    const characterName = character.alive ? (
      character.name
    ) : (
      <div style={{ color: "red" }}>{character.name}</div>
    );
  
    //is character multiclassed?
    for (let i of multiClass) {
      let combo = [];
      for (let m in i) {
        combo += i[m];
        if (m === "className") {
          combo += ": ";
        }
      }
      classes.push(<td key={character.name + i["className"]}>{combo}</td>);
    }
  
    let i = 0;
    const start = rows.push(
      <tr key={character.id+"-"+i}>
        <td rowSpan={count} key={character.name+character.id}> {characterName}</td>
        {classes[i]}
        <td key={character.race} rowSpan={count}>
          {character.race}
        </td>
      </tr>
    );
  
    let l =0;
    console.log(count);
    if (count > 1) {
      while (l < count - 1) {
        l++;
        rows.push(
          <tr key={character.id+"-"+l}>
            {classes[l]}
          </tr>
        );
      }
    } else {
      start;
    }
  
    return <>{rows}</>;
  }
  