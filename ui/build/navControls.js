'use strict';

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
  const classNamer = document.getElementById(id);
  if (classNamer.className === 'active') {
    classNamer.className = '';
  } else {
    classNamer.className = 'active';
  }
}
