import SearchApp from './Table/SearchApp.js';
import CreateCharacter from './Addition/CreateCharacterApp.js';
import ScrollBoxApp from './ScrollBox/scrollBoxApp.js';

export function changing() {
  const drop = document.getElementById('container').innerHTML;

  console.log(document.getElementById('navHome').className);
  if (document.getElementById('navHome').className === 'active') {
    return <br />;
  } else if (document.getElementById('navAdd').className === 'active') {
    return (drop = <CreateCharacter />);
  } else if (document.getElementById('navList').className === 'active') {
    return (drop = <SearchApp />);
  } else {
    return (drop = <ScrollBoxApp />);
  }
}
