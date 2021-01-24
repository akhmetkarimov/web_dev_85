<?php

include '../../config/database.php';

$title = $_POST['title'];
$description = $_POST['description'];
$category = $_POST['category'];
$img_path = '';

if (isset($_FILES['postImg']) && isset($_FILES["postImg"]["name"])) {
    $temp = explode(".", $_FILES["postImg"]["name"]);
    $file_name = time() . "." . end($temp);
    move_uploaded_file($_FILES["postImg"]["tmp_name"], "../../images/posts/$file_name");
    $img_path = "images/posts/$file_name";
    $db->query("INSERT INTO `posts` (`title`, `description`, `category_id`, `image`) VALUES ('$title', '$description', '$category', '$img_path');");
    header('Location: /web_dev_85_php/main.php');
}


?>
