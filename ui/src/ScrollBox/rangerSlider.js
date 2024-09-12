import { useState } from 'react';

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

//END

export function RatingRange(props) {
  const { slideValue, setSlideValue } = props;
  const [dynamicTack, setDynamicTack] = useState({
    marginLeft: 10,
    width: 10,
  });
  console.log(slideValue);

  function handleSlider(e) {
    if (e.target.id === 'crRangeRight') {
      if (parseInt(e.target.value) <= parseInt(slideValue.crRangeRight)) {
        setSlideValue((s) => ({ ...s, [e.target.id]: e.target.value }));
        setDynamicTack((s) => ({
          ...s,
          width: `${parseInt(e.target.value)}%`,
        }));
      }
    } else {
      if (parseInt(e.target.value) > parseInt(slideValue.crRangeLeft)) {
        setSlideValue((s) => ({ ...s, [e.target.id]: e.target.value }));
        setDynamicTack((s) => ({
          ...s,
          marginLeft: parseInt(e.target.value) + 4,
          width: `${parseInt(dynamicTack.width) - parseInt(e.target.value)}%`,
        }));
      }
    }
  }

  const rating = (
    <label>
      <h4>
        Challenge Rating
        {`: ${slideValue.crRangeLeft} to ${slideValue.crRangeRight}`}
      </h4>
      <br />
      <div className="slider">
        <input
          type="range"
          id="crRangeRight"
          min="0"
          max="30"
          value={slideValue.crRangeRight}
          className="slider"
          onChange={(e) => {
            handleSlider(e);
            setSlideValue({ ...slideValue, [e.target.id]: e.target.value });
          }}
        ></input>
        <input
          type="range"
          id="crRangeLeft"
          min="0"
          max="30"
          value={slideValue.crRangeLeft}
          className="slider"
          onChange={(e) => {
            handleSlider(e);
            setSlideValue({ ...slideValue, [e.target.id]: e.target.value });
          }}
        ></input>
        <div className="slider">
          <div className="slider__track"></div>
          {/* <div ref={range} className="slider__range"></div> */}
        </div>
      </div>
      <br />
      <div className="ruler">{pipCalc(30)}</div>
      <div className="ruler">{pipNums(30)}</div>
    </label>
  );

  return rating;
}
