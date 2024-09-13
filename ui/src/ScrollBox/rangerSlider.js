import { useEffect, useState, useRef, useCallback } from 'react';

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

// From "Native dual range slider - HTML, CSS & JavaScript" - Predrag Davidovic
//https://medium.com/@predragdavidovic10/native-dual-range-slider-html-css-javascript-91e778134816
//Data Sept 10, 2024

export function RatingRange(props) {
  //   const { slideValue, setSlideValue } = props;
  const { crRangeRight, setcrRangeRight, crRangeLeft, setcrRangeLeft } = props;

  // refs for state variables
  const crRangeLeftRef = useRef(null);
  const crRangeRightRef = useRef(null);
  const range = useRef(null);

  const getPercent = useCallback(
    (value) =>
      Math.round(((value - crRangeLeft) / (crRangeRight - crRangeLeft)) * 100),
    [crRangeLeftRef, crRangeRightRef]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (crRangeRightRef.current) {
      const minPercent = getPercent(crRangeLeft);
      const maxPercent = getPercent(+crRangeRightRef.current.value); // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [crRangeLeft, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (crRangeLeftRef.current) {
      const minPercent = getPercent(crRangeLeftRef.current.value);
      const maxPercent = getPercent(crRangeRight);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [crRangeRight, getPercent]);

  console.log(range.current);
  const rating = (
    <label>
      <h4>
        Challenge Rating
        {`: ${crRangeLeft} to ${crRangeRight}`}
      </h4>
      <br />
      <div className="slider__container">
        <input
          type="range"
          id="crRangeRight"
          min="0"
          max="30"
          ref={crRangeRightRef}
          value={crRangeRight}
          className={'slider'}
          onChange={(e) => {
            setcrRangeRight(e.target.value);
          }}
        ></input>
        <input
          type="range"
          id="crRangeLeft"
          min="0"
          max="30"
          ref={crRangeLeftRef}
          value={crRangeLeft}
          className="slider"
          onChange={(e) => {
            setcrRangeLeft(e.target.value);
          }}
        ></input>
        <div className="slider">
          <div className="slider__track"></div>
          <div ref={range} className="slider__range"></div>
        </div>
      </div>
      <br />
      <div className="ruler">{pipCalc(30)}</div>
      <div className="ruler">{pipNums(30)}</div>
    </label>
  );

  return rating;
}
