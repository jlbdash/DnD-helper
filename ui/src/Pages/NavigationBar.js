import { Link } from 'react-router-dom';

export default function NavigationBar() {
  function handleOnClick(id) {
    //remove active from all

    const activeClass = document.getElementsByClassName('active');
    let switcher = document.getElementById(`container${id}`);
    let classNamer = document.getElementById(id);

    for (let x = 0; x < activeClass.length; x++) {
      if (activeClass[x]['localName'] === 'a') {
        // click active off for button
        document.getElementById(activeClass[x]['id']).className = 'nav-link';
        // click active on for button
        classNamer.className = 'nav-link active';
      }
    }
  }

  return (
    <nav>
      <ul className="topnav">
        <li>
          <Link
            to="/"
            style={{ border: '1px grey solid' }}
            state={{ action: 'ACTION_CREATE' }}
            className="nav-link active"
            id="navHome"
            value="navHome"
            onClick={(e) => {
              handleOnClick(e.target.id);
            }}
          >
            ADD AND SEARCH
          </Link>
        </li>
        <li>
          <Link
            to="/create-character"
            style={{ border: '1px grey solid' }}
            className="nav-link"
            id="navAdd"
            value="navAdd"
            onClick={(e) => {
              handleOnClick(e.target.id);
            }}
          >
            Add a Character
          </Link>
        </li>
        <li>
          <Link
            to="/search-character"
            style={{ border: '1px grey solid' }}
            className="nav-link"
            id="navList"
            value="navList"
            onClick={(e) => {
              handleOnClick(e.target.id);
            }}
          >
            Character List
          </Link>
        </li>
        <li>
          <Link
            to="/handbook"
            style={{ border: '1px grey solid' }}
            className="nav-link"
            id="navSearch"
            value="navSearch"
            onClick={(e) => {
              handleOnClick(e.target.id);
            }}
          >
            Search for...
          </Link>
        </li>
      </ul>
    </nav>
  );
}
