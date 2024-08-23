import './overAllStyle.css';
import SearchApp from './Table/SearchApp.js';
import CreateCharacter from './Addition/CreateCharacterApp.js';
import ScrollBoxApp from './ScrollBox/scrollBoxApp.js';

export default function Navie() {
  function handleOnClick(id) {
    //remove active from all
    const activeClass = document.getElementsByClassName('active');
    const len = activeClass.length;
    let x = 0;
    if (x < len) {
      document.getElementById(activeClass[x]['id']).className = '';
      x++;
    }

    // click active on
    let classNamer = document.getElementById(id);
    if (classNamer === 'active') {
      classNamer = '';
    } else {
      classNamer = 'active';
    }

    let switcher = document.getElementById('container');
    console.log(switcher);
    switch (id) {
      case 'navAdd':
        switcher = `${(<CreateCharacter />)}`;
        break;
      case 'navList':
        switcher = `${(<SearchApp />)}`;
        break;
      case 'navSearch':
        switcher = <ScrollBoxApp />;
        break;
      case 'navHome':
        switcher = <h2>Start Your Quest</h2>;
        break;
      default:
        switcher = <h2>Start Your Quest</h2>;
        break;
    }
  }

  return (
    <nav>
      <ul className="topnav">
        <li>
          <button
            className="active"
            id="navHome"
            onClick={handleOnClick('navHome')}
          >
            <strong>ADD AND SEARCH</strong>
          </button>
        </li>
        <li>
          <button className="" id="navAdd" onClick={handleOnClick('navAdd')}>
            Add a Character
          </button>
        </li>
        <li>
          <button className="" id="navList" onClick={handleOnClick('navList')}>
            Character List
          </button>
        </li>
        <li>
          <button
            className=""
            id="navSearch"
            onClick={handleOnClick('navSearch')}
          >
            Search for...
          </button>
        </li>
      </ul>
    </nav>
  );
}
