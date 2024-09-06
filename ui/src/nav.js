import './overAllStyle.css';

export default function Navie() {
  function handleOnClick(id) {
    //remove active from all
    const activeClass = document.getElementsByClassName('active');
    let switcher = document.getElementById(`container${id}`);
    let classNamer = document.getElementById(id);
    console.log(id);

    for (let x = 0; x < activeClass.length; x++) {
      if ( activeClass[x]['localName'] === 'button') {
        // click active off
        document.getElementById(activeClass[x]['id']).className = '';
        // click active on
        classNamer.className = 'active';
      } else {
        // click active off
        document.getElementById(activeClass[x]['id']).className = 'inactive';

        // click active on
        switcher.className = 'active';
      }
    }
  }

  return (
    <nav>
      <ul className="topnav">
        <li>
          <button
            className="active"
            id="navHome"
            value="navHome"
            onClick={(e) => {
              handleOnClick(e.target.value);
            }}
          >
            <strong>ADD AND SEARCH</strong>
          </button>
        </li>
        <li>
          <button
            className=""
            id="navAdd"
            value="navAdd"
            onClick={(e) => {
              handleOnClick(e.target.value);
            }}
          >
            Add a Character
          </button>
        </li>
        <li>
          <button
            className=""
            id="navList"
            value="navList"
            onClick={(e) => {
              handleOnClick(e.target.value);
            }}
          >
            Character List
          </button>
        </li>
        <li>
          <button
            className=""
            id="navSearch"
            value="navSearch"
            onClick={(e) => {
              handleOnClick(e.target.value);
            }}
          >
            Search for...
          </button>
        </li>
      </ul>
    </nav>
  );
}
