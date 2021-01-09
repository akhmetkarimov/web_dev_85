<?php

if (isset($_GET['myName']) && strlen($_GET['myName']) > 0) {
    $name = $_GET['myName'];
    $surname = $_GET['mySurName'];
    echo "$name $surname";
} else {
    echo "Please Enter name";
}

?>
