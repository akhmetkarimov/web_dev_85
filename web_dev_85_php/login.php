<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>

    <h1>Login</h1>

    <form action="api/login.php" method="POST">
        <input type="email" name="login" placeholder="Enter login"> <br>  <br>
        <input type="password" name="password" placeholder="Enter password"> <br>  <br>
        <button>login</button>
    </form>
    
    <a href="register.php">Create Account</a>
    
</body>
</html>