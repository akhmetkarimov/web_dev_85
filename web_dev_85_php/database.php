<?php
    //                host         user    pass   database
    $db = new mysqli('localhost', 'root', 'root', 'web85');
    
    if ($db->connect_error) {
        echo $db->connect_error;
    }