<?php

include '../config/database.php';

$id = $_POST['idEdit'];
$name = $_POST['nameEdit'];
$email = $_POST['emailEdit'];

$db->query("UPDATE account SET name = '$name', email = '$email' WHERE id = $id");

header('Location: /web_dev_85_php');

?>