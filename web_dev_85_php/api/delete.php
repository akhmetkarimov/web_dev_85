<?php

include '../config/database.php';

$id = $_GET['id'];

$db->query("DELETE FROM account WHERE id = $id");

// header('Location: /web_dev_85_php');

echo json_encode(true);

?>