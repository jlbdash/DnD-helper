<?php

$name = "";
$q = $_REQUEST["q"];
echo "<script>console.log( $q );</script>";

function test_input($q) {
    $q = trim($q);
    $q = stripslashes($q);
    $q = htmlspecialchars($q);
    return true;
}

if (test_input($q) === true) {
    if (preg_match('/[^A-Za-z0-9-`-~äöüæẞßáéíóúñçâêîôûàèù]{1,}/', $q)) {
        $name = "No specialty characters! ie [],(),@,!,$,_, : or ;";
    } else if (strlen($q) == 0) {
        $name = "";
    }
}
echo $name;