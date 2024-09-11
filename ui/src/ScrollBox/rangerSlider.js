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
function controlFromSlider(fromSlider, toSlider) {
    console.log(toSlider);
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
  if (from > to) {
    fromSlider.value = to;
  } else {
    fromSlider.value = from;
  }
}

function controlToSlider(fromSlider, toSlider) {
    console.log(toSlider);
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
  } else {
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
    console.log(currentFrom);
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    console.log(from);
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
    console.log(currentTarget);
  const toSlider = document.querySelector('#crRangeSlider');
  if (Number(currentTarget.value) <= 0 ) {
    toSlider.style.zIndex = 0;
  } else {
    toSlider.style.zIndex = 2;
  }
}

const fromSlider = document.querySelector('#crRangeSlider2');
const toSlider = document.querySelector('#crRangeSlider');
fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
setToggleAccessible(toSlider);
console.log(fromSlider);
fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider);
//END 


export function RatingRange(props) {
  const { crRange, crRange2, setcrRange, setcrRange2 } = props;
  
  return (
    <label>
      <h4>
        Challenge Rating
        {`: ${crRange2} to ${crRange}`}
      </h4>
      <br />
      <div className="slider">
        <input
          type="range"
          id="crRangeSlider"
          min="0"
          max="30"
          value={crRange}
          className="slider"
          onInput={(e) => {
            setcrRange(e.target.value);
          }}
        ></input>
        <input
          type="range"
          id="crRangeSlider2"
          min="0"
          max="30"
          value={crRange2}
          className="slider"
          onInput={(e) => {
            setcrRange2(e.target.value);
          }}
        ></input>
      </div>
      <br />
      <div className="ruler">{pipCalc(30)}</div>
      <div className="ruler">{pipNums(30)}</div>
    </label>
  );
}
