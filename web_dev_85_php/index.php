<?php
    include 'config/database.php';
    // session_start();
    $cookie = $_COOKIE['cuser_id'];
    // $session = $_SESSION['user_id'];

    $query = $db->query('SELECT * FROM account');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
</head>
<body>
    <h1>Hello php</h1>

    <form action="api/get.php" method="get">
        <h1>GET</h1>
        <input type="text" placeholder="Enter your name" name="myName">
        <input type="text" placeholder="Enter your surname" name="mySurName">
        <button>Send</button>
    </form>

    <form onsubmit="addAccount(event)" method="post">
        <h1>POST</h1>
        <input id="newName" type="text" placeholder="Enter your name" name="myName">
        <input id="newEmail" type="email" placeholder="Enter your email" name="myEmail">
        <input id="newPassword" type="password" placeholder="Enter your password" name="myPassword">
        <button>Send</button>
    </form>

    <div class="accountOutput">
    </div>

    <!-- <table border="1">
        <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Delete</th>
            <th>Detail</th>
            <th>Edit</th>
        </tr> -->

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

            // if ($query->num_rows > 0){
            //     while($row = $query->fetch_object()){
            //         echo " 
            //             <tr>
            //                 <td> $row->id </td>
            //                 <td> $row->name </td>
            //                 <td> $row->email </td>
            //                 <td> $row->password </td>
            //                 <td> <a href='api/delete.php?id=$row->id'>Delete</a> </td>
            //                 <td> <a href='edit.php?id=$row->id'>Edit</a> </td>
            //                 <td> <a href='detail.php?id=$row->id'>Detail</a> </td>
            //             </tr>
            //         ";               
            //     }
            // }

        ?>
<!-- 
    </table> -->


    <script src="js/account.js"></script>


</body>
</html>