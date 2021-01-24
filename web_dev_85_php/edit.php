<?php
    include 'config/database.php';

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
    <h1>Edit Page</h1>

    <img src="https://i.stack.imgur.com/l60Hf.png" alt="profile" width="200" height="200" style="object-fit: cover">
    
    <form action="api/update.php" method="POST">
        <input type="text" value=<?= $profile->name; ?> name="nameEdit">
        <input type="email" value=<?= $profile->email; ?> name="emailEdit">
        <input type="hidden" value=<?= $profile->id; ?> name="idEdit">
        <button>Edit</button>
    </form>
    


    <a href="index.php">Back to Main</a>


</body>
</html>