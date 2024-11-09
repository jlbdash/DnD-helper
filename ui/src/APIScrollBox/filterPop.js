import React, { useState } from 'react';
import { RatingRange } from '../Components/rangerSlider';

// makes the form disappear
function closeForm() {
  document.getElementById('FilterForm').style.display = 'none';
}

//pips for the range slider
function pipCalc(measure) {
  let pipMarkers = [];
  for (let x = 0; x < measure + 1; x++) {
    pipMarkers.push(
      <div key={`pip${x}`} className="ruler-pip">
        {' '}
        '
      </div>
    );
  }
  return <>{pipMarkers}</>;
}
//pips for the range slider
function pipNums(measure) {
  let pipNums = [];
  for (let x = 0; x < measure + 1; x++) {
    pipNums.push(
      <div key={`pipN${x}`} className="ruler-pip">
        {x}
      </div>
    );
  }
  return <>{pipNums}</>;
}

//changes the clicked preferences in the form
function changeNext(id) {
  if (document.getElementById(id).className === 'btn') {
    document.getElementById(id).className = 'btn included';
  } else if (document.getElementById(id).className === 'btn included') {
    document.getElementById(id).className = 'btn excluded';
  } else {
    document.getElementById(id).className = 'btn';
  }
}

//onClick for the "save" button in the form
function settingColelction(setSearchText) {
  let includedItem = [];
  let excludedItem = [];

  const includedClass = document.getElementsByClassName('included');
  for (let x = 0; x < includedClass.length; x++) {
    includedItem.push(includedClass[x].id);
  }
  const excludedClass = document.getElementsByClassName('excluded');
  for (let x = 0; x < excludedClass.length; x++) {
    excludedItem.push(excludedClass[x].id);
  }

  //   find the ranges
  const rangeValue = document.getElementsByClassName('slider');
  let ranges = [];
  for (let x = 0; x < rangeValue.length; x++) {
    ranges.push(rangeValue[x].value);
  }
  includedItem.push({ rangeValue: ranges });
  setSearchText([includedItem, excludedItem]);
}

// creates the Filter Form
export default function FilterForm(setSearchText) {
  const [crRangeRight, setcrRangeRight] = useState(30);
  const [crRangeLeft, setcrRangeLeft] = useState(0);
//   const [slideValue,setSlideValue] = React.useState({
//     crRangeRight:30,
//     crRangeLeft:0
//   })
const [rangeChanges, setRangeChanges] = useState({
        crRangeRight:30,
        crRangeLeft:0
      })
  const filterform = (
    <form id="FilterForm" className="filter-form">
      {/* CR range slider */}
      <RatingRange
        // slideValue={slideValue}
        // setSlideValue={setSlideValue}
        crRangeRight={crRangeRight}
        crRangeLeft={crRangeLeft}
        setcrRangeRight={setcrRangeRight}
        setcrRangeLeft={setcrRangeLeft}
      />
      <br />
      <br />
      {/* Size range */}
      <h4> Size</h4>
      <div
        id="sizeTiny"
        className="btn"
        onClick={(e) => {
          e.defaultPrevented;
          e.stopPropagation();
          changeNext(e.target.id);
        }}
      >
        Tiny
      </div>
      <div
        id="sizeSmall"
        className="btn excluded"
        onClick={(e) => {
          e.defaultPrevented;
          changeNext(e.target.id);
        }}
      >
        Small
      </div>
      <div
        id="sizeMedium"
        className="btn"
        onClick={(e) => {
          e.defaultPrevented;
          changeNext(e.target.id);
        }}
      >
        Medium
      </div>{' '}
      <div
        id="sizeLarge"
        className="btn"
        onClick={(e) => {
          e.defaultPrevented;
          changeNext(e.target.id);
        }}
      >
        Large
      </div>{' '}
      <div
        id="sizeHuge"
        className="btn"
        onClick={(e) => {
          e.defaultPrevented;
          setSearchText();
          changeNext(e.target.id);
        }}
      >
        Huge
      </div>{' '}
      <div
        id="sizeGargantuan"
        className="btn"
        onClick={(e) => {
          e.defaultPrevented;
          setSearchText();
          changeNext(e.target.id);
        }}
      >
        Gargantuan
      </div>
      <br />
      <br />
      {/* Condition Immunity range */}
      <h4> Condition Immunities</h4>
      <div className="btn" onClick={(e) => setSearchText('Large')}>
        {' '}
        Show all
      </div>
      <div className="btn" onClick={(e) => setSearchText('Large')}>
        {' '}
        Cars
      </div>
      <div className="btn" onClick={(e) => setSearchText('Large')}>
        {' '}
        Animals
      </div>
      <div className="btn" onClick={(e) => setSearchText('Large')}>
        {' '}
        Fruits
      </div>
      <div className="btn" onClick={(e) => setSearchText('Large')}>
        {' '}
        Colors
      </div>
      <br /> <br />
      <hr />
      <button
        type="button"
        onClick={(e) => {
          closeForm();
          settingColelction(setSearchText);
        }}
      >
        Save
      </button>
    </form>
  );

  return filterform;
}
