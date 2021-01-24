<?php
if (!empty($_COOKIE['cuser_id'])) {
    unset($_COOKIE['cuser_id']);
    setcookie('cuser_id', null, -1, '/');
    header('Location: /web_dev_85_php/main.php');
}