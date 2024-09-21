function changing(activeID) {
  let switcher = document.getElementById('container');

  switch (activeID) {
    case 'navAdd':
      return switcher = '<CreateCharacter />';
    case 'navList':
      return switcher = '<SearchApp />';
    case 'navSearch':
      return switcher = '<ScrollBoxApp />';

    default:
      return switcher = '<h2>Start Your Quest</h2>';
  }
}
