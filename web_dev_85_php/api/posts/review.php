<?php

include '../../config/database.php';

$review = $_POST['review'];
$pid = $_POST['postid'];
$rate = $_POST['rate'];
$uid = $_POST['uid'];

$db->query("INSERT INTO `reviews` (`review`, `rate`, `pid`, `uid`) VALUES ('$review', '$rate', '$pid', '$uid');");

header("Location: /web_dev_85_php/post-detail.php?pid=$pid");

?>
