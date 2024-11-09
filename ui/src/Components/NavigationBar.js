export default function NavigavtionBar() {
  function handleOnClick(id) {
    //remove active from all

    const activeClass = document.getElementsByClassName('active');
    let switcher = document.getElementById(`container${id}`);
    let classNamer = document.getElementById(id);
    for (let x = 0; x < activeClass.length; x++) {
      if (activeClass[x]['localName'] === 'button') {
        // click active off for button
        document.getElementById(activeClass[x]['id']).className = '';
        // click active on for button
        classNamer.className = 'active';
      } else {
        // click active off for tab
        document.getElementById(activeClass[x]['id']).className = 'inactive';
        // click active on for tab
        switcher.className = 'active';
      }
    }
  }

  return (
    <nav>
      <ul className="topnav">
        <li>
          <button
            style={{ fontWeight: 'bold' }}
            className="active"
            id="navHome"
            value="navHome"
            onClick={(e) => {
              console.log(e.target);
              handleOnClick(e.target.id);
            }}
          >
            ADD AND SEARCH
          </button>
        </li>
        <li>
          <button
            className=""
            id="navAdd"
            value="navAdd"
            onClick={(e) => {
              handleOnClick(e.target.id);
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
              handleOnClick(e.target.id);
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
              handleOnClick(e.target.id);
            }}
          >
            Search for...
          </button>
        </li>
      </ul>
    </nav>
  );
}
