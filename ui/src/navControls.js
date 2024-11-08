import CreateCharacter from './Addition/CreateCharacterApp.js';
import ScrollBoxApp from './ScrollBox/scrollBoxApp.js';
import SearchApp from './Table/SearchApp.js';

export function handleOnClick(id) {
  //remove active from all

  let activeClass = document.getElementsByClassName('active');
  const len = activeClass.length;
  let x = 0;
  if (x < len) {
    document.getElementById(activeClass[x]['id']).className = '';
    x++;
  }

  // click active on
  let classNamer = document.getElementById(id);
  if (classNamer.className === 'active') {
    classNamer.className = '';
  } else {
    classNamer.className = 'active';
  }

  let switcher = document.getElementById('container');

  switch (id) {
    case 'navAdd':
      switcher.innerHTML = <CreateCharacter />;
      break;
    case 'navList':
      switcher.innerHTML= `${<SearchApp />}`;
      break;
    case 'navSearch':
      switcher.innerHTML = `${<ScrollBoxApp />}`;
      break;
    case 'navHome':
      switcher.innerHTML = <h2>Start Your Quest</h2>;
      break;
    default:
      switcher.innerHTML = <h2>Start Your Quest</h2>;
      break;
  }
}
