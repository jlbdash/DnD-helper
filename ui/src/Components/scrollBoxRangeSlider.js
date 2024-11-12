import { useCallback, useEffect, useRef } from 'react';

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

// From "Multi range range slider React" - Sandra Lewis
//https://codesandbox.io/p/sandbox/b9l0g?file=%2Fsrc%2FmultiRangeSlider%2FmultiRangeSlider.css%3A10%2C13
//Data Sept 13, 2024

export function RatingRange(props) {
  //   const { slideValue, setSlideValue } = props;
  const { crRangeRight, setcrRangeRight, crRangeLeft, setcrRangeLeft } = props;
  let min = 0;
  let max = 30;

  // refs for state variables
  const crRangeLeftRef = useRef(null);
  const crRangeRightRef = useRef(null);
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.ceil(((value - min) / (max - min)) * 96),
    [min, max]
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
      const minPercent = getPercent(+crRangeLeftRef.current.value);
      const maxPercent = getPercent(crRangeRight);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [crRangeRight, getPercent]);

  const rating = (
    <label>
      <h4>
        Challenge Rating
        {`: ${crRangeLeft} to ${crRangeRight}`}
      </h4>
      <br />
      <div className="slider-container">
        <input
          type="range"
          id="crRangeLeft"
          min={min}
          max={max}
          ref={crRangeLeftRef}
          value={crRangeLeft}
          className="thumb thumb-left"
          onChange={(e) => {
            let val = Math.min(e.target.value, crRangeRight);
            setcrRangeLeft(val);
            min = crRangeLeft;
          }}
        />
        <input
          type="range"
          id="crRangeRight"
          min={min}
          max={max}
          ref={crRangeRightRef}
          value={crRangeRight}
          className="thumb thumb-right"
          onChange={(e) => {
            let val = Math.max(e.target.value, crRangeLeft);
            setcrRangeRight(val);
            max = crRangeRight;
          }}
        />
      </div>
      <div className="slider">
        <div className="slider-track"></div>
        <div ref={range} className="slider-range"></div>
      </div>
      <br />
      <div className="ruler">{pipCalc(30)}</div>
      <div className="ruler">{pipNums(30)}</div>
    </label>
  );

  return rating;
}
