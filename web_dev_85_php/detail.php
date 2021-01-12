<?php
    include 'database.php';

    $profile_id = $_GET['id'];

    $query = $db->query("SELECT * FROM account WHERE id=$profile_id");

    $profile = $query->fetch_object(); 

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Detail Page</h1>

    <img src="https://i.stack.imgur.com/l60Hf.png" alt="profile" width="200" height="200" style="object-fit: cover">

    <p>ID: <?= $profile->id; ?></p>
    <p>Name: <?= $profile->name; ?></p>
    <p>Email: <?= $profile->email; ?></p>

    <a href="index.php">Back to Main</a>


</body>
</html>