//Validation for Addition Form Names
export function nameValidation(str) {
  const xhttp = new XMLHttpRequest();
  let error = document.getElementById('error');
  xhttp.onload = function () {
    console.log(this.responseText);
  };
  xhttp.open('GET', 'opener.php');
  xhttp.send();
}
