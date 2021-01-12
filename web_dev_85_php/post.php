<?php

// if (isset($_POST['myName']) && strlen($_POST['myName']) > 0) {
//     $name = $_POST['myName'];
//     $surname = $_POST['mySurName'];
//     echo "$name $surname";
// } else {
//     echo "Please Enter name";
// }

include 'database.php';

$name = $_POST['myName'];
$email = $_POST['myEmail'];
$password = $_POST['myPassword'];


$db->query("INSERT INTO account (name, email, password) VALUES ('$name', '$email', '$password')");

header('Location: /web_dev_85_php');

?>
