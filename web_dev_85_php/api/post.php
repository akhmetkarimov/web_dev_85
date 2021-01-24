<?php

// if (isset($_POST['myName']) && strlen($_POST['myName']) > 0) {
//     $name = $_POST['myName'];
//     $surname = $_POST['mySurName'];
//     echo "$name $surname";
// } else {
//     echo "Please Enter name";
// }

include '../config/database.php';

$name = $_POST['myName'];
$email = $_POST['myEmail'];
$password = $_POST['myPassword'];
$hashPassword = sha1($password);

$db->query("INSERT INTO account (name, email, password) VALUES ('$name', '$email', '$hashPassword')");

// header('Location: /web_dev_85_php');

echo json_encode(true)

?>
