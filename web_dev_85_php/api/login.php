<?php

include "../config/database.php";
// session_start();

$login = $_POST['login'];
$password = $_POST['password'];
$hashPassword = sha1($password);

$exist = $db->query("SELECT * FROM account WHERE email = '$login'");

if ($exist->num_rows > 0) {
    $userFromDb = $exist->fetch_object();
    if ($userFromDb->password == $hashPassword) {
        // $_SESSION['user_id'] = $userFromDb->id;
        setcookie('cuser_id', $userFromDb->id, 0, '/');
        header('Location: /web_dev_85_php/main.php');
    } else {
        header('Location: /web_dev_85_php/login.php?error=NOT_MATCH');
    }

} else {
    header('Location: /web_dev_85_php/login.php?error=NOT_FOUND');
}