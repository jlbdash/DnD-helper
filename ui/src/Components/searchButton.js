import React from 'react';

export default function SearchButton({
    searchable,
    searchText,
    onSearchTextChange,
    onSearchableChange,
    formName,
    displayText
  }) {
    return (
      <>
        <form id={formName}>
          <input
            type='text'
            value={searchText}
            placeholder='Search...'
            onChange={(e) => onSearchTextChange(e.target.value)}
          />
          <br />
          <label>
            <input
              type='checkbox'
              checked={searchable}
              onChange={(e) => onSearchableChange(e.target.checked)}
            />{displayText}
          </label>
        </form>
      </>
    );
  }
  