let error = '';
let q = request.querystring("q");
console.log('hi')
console.log(request.querystring("q"));

function test_input(q) {
  q = trim(q);
  q = stripslashes(q);
  q = htmlspecialchars(q);
  return true;
}

if (test_input(q) === true) {
  if (preg_match('/[^A-Za-z0-9-`-~äöüæẞßáéíóúñçâêîôûàèù]{1,}/', q)) {
    error = 'No specialty characters! ie [],(),@,!,$,_, : or ;';
  } else if (strlen(q) == 0) {
    error = '';
  }
}
console.log(error);
return error;
