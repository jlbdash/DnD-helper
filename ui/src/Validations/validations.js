//Validation for Addition Form Names

let invalidityMessage = '';

export function usernameValidation(str, id) {
  // create message and patterns
  const error = document.getElementById('error'+id);
  const illegalCharacters = str.match(
    /[^aA-Za-z0-9-`_äëïöüæẞßáéíóúñçâêîôûàèù]/g
  );

  // create checks
  if (str.length < 1) {
    invalidityMessage = '';
  } else if (illegalCharacters) {
    invalidityMessage = 'Only letters, numbers, _ and - are allowed';
  } else if (str.length < 3) {
    invalidityMessage = 'This input needs to be at least 3 characters';
  } else {
    invalidityMessage = '';
  }
  error.innerHTML = invalidityMessage;
}

export function nameValidation(str, id) {
  // create message and patterns
  const error = document.getElementById('error'+id);
  const illegalCharacters = str.match(
    /[^aA-Za-z0-9-`!?_äëïöüæẞßáéíóúñçâêîôûàèù\s]/g
  );

  // create checks
  if (str.length < 1) {
    invalidityMessage = '';
  } else if (illegalCharacters) {
    invalidityMessage =
      'Only letters, numbers, spaces,-, !, ? and' + "'" + ' are allowed';
  } else if (str.length < 3) {
    invalidityMessage = 'This input needs to be at least 3 characters';
  } else {
    invalidityMessage = '';
  }
  error.innerHTML = invalidityMessage;
}

export function classValidation(str) {
  // create message and patterns
  const error = document.getElementById('errorC');
  const illegalCharacters = str.match(/[^a-zA-Z0-9]/g);

  // create checks
  if (str.length < 1) {
    invalidityMessage = '';
  } else if (illegalCharacters) {
    invalidityMessage = 'Only letters, numbers, _ and - are allowed';
  } else if (str.length < 3) {
    invalidityMessage = 'This input needs to be at least 3 characters';
  } else {
    invalidityMessage = '';
  }
  error.innerHTML = invalidityMessage;
}

export function raceValidation(str, id) {
  // create message and patterns
  const error = document.getElementById('error'+id);
  const illegalCharacters = str.match(/[^a-zA-Z0-9]/g);

  // create checks
  if (str.length < 1) {
    invalidityMessage = '';
  } else if (illegalCharacters) {
    invalidityMessage = 'Only letters, numbers, _ and - are allowed';
  } else if (str.length < 3) {
    invalidityMessage = 'This input needs to be at least 3 characters';
  } else {
    invalidityMessage = '';
  }
  error.innerHTML = invalidityMessage;
}
