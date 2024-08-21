import React from 'react';

export default function SearchButton({
    isAlive,
    searchText,
    onSearchTextChange,
    onisAliveChange,
  }) {
    return (
      <>
        <form>
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
              checked={isAlive}
              onChange={(e) => onisAliveChange(e.target.checked)}
            />{' '}
            Only show alive characters
          </label>
        </form>
      </>
    );
  }
  