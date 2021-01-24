<?php

    include "../config/database.php";

    $accountList = $db->query("SELECT * FROM account");
    $result = [
        'accounts' => []
    ];

    while($row = $accountList->fetch_object()) {
        array_push($result['accounts'], $row);
    }

    echo json_encode($result);

?>
