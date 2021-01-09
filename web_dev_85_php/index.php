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



</body>
</html>