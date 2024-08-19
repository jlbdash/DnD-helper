//Validation for Addition Form Names
export function nameValidation(str) {
  let xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById('error').innerHTML = this.responseText;
  };
  xhttp.open('GET', 'processingName.js?q=' + str);
  xhttp.send();
}

//Validation for Sign Up Password
function passKey(str) {
  let passE = document.getElementById('passE');
  let xhttp;
  if (str === '') {
    passE.innerHTML = '';
  } else {
    xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      passE.innerHTML = this.responseText;
    };
    xhttp.open('GET', 'processingPass.php?q=' + str);
    xhttp.send();
  }
}

//Validation for sign Up Email
function emailKey(str) {
  let emailE = document.getElementById('emailE');
  let xhttp;
  if (str === '') {
    emailE.innerHTML = '';
  } else {
    xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      emailE.innerHTML = this.responseText;
    };
    xhttp.open('GET', 'processingEmail.php?q=' + str);
    xhttp.send();
  }
}

//Validation for sign Up Email on the Contact Us Page
function emailCKey(str) {
  let emailE = document.getElementById('emailE');
  let xhttp;
  if (str === '') {
    emailE.innerHTML = '';
  } else {
    xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      emailE.innerHTML = this.responseText;
    };
    xhttp.open('GET', 'processingEmailContact.php?q=' + str);
    xhttp.send();
  }
}

// Allowance for Sign Up Submission
function submission() {
  if (document.getElementById('emailE').innerHTML === 'Valid') {
    if (document.getElementById('passE').innerHTML === 'Valid') {
      document.forms['signin']['submit'].removeAttribute('disabled');
    }
  }
}
