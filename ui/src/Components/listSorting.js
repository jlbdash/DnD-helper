import React, { useState } from 'react';

export const IdeaSection = () => {
  const [items, setItems] = useState([]);

  // Move item up
  const moveUp = (index) => {
    if (index === 0) return; // can't move up first item
    const newItems = [...items];
    [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
    setItems(newItems);
  };

  // Move item down
  const moveDown = (index) => {
    if (index === items.length - 1) return; // can't move down last item
    const newItems = [...items];
    [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
    setItems(newItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => moveUp(index)} disabled={index === 0}>⬆️</button>
          <button onClick={() => moveDown(index)} disabled={index === items.length - 1}>⬇️</button>
        </li>
      ))}
    </ul>
  );
};
