<?php
    include 'database.php';

    $query = $db->query('SELECT * FROM account');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    <h1>Hello php</h1>

    <form action="get.php" method="get">
        <h1>GET</h1>
        <input type="text" placeholder="Enter your name" name="myName">
        <input type="text" placeholder="Enter your surname" name="mySurName">
        <button>Send</button>
    </form>

    <form action="post.php" method="post">
        <h1>POST</h1>
        <input type="text" placeholder="Enter your name" name="myName">
        <input type="email" placeholder="Enter your email" name="myEmail">
        <input type="password" placeholder="Enter your password" name="myPassword">
        <button>Send</button>
    </form>



    <table border="1">
        <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
            <th>Detail</th>
        </tr>

        <?php
            // if ($query->num_rows > 0){
                // while($row = $query->fetch_object()){
        ?>

        <!-- <tr>
            <td> <?php echo $row->id;?> </td>
            <td> <?php echo $row->name;?> </td>
            <td> <?php echo $row->email;?> </td>
            <td> <?php echo $row->password;?> </td>
        </tr> -->

        <?php
                // }
            // }
        ?>



        <?php

            if ($query->num_rows > 0){
                while($row = $query->fetch_object()){
                    echo " 
                    <tr>
                        <td> $row->id </td>
                        <td> $row->name </td>
                        <td> $row->email </td>
                        <td> $row->password </td>
                        <td> <a href='delete.php?id=$row->id'>Delete</a> </td>
                        <td> <a href='detail.php?id=$row->id'>Detail</a> </td>
                    </tr>
                    ";               
                }
            }

        ?>

    </table>


</body>
</html>