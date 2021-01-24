<?php

include '../../config/database.php';

$pid = $_POST['pid'];
$uid = $_POST['uid'];

$db->query("INSERT INTO `post_favorites` (`pid`, `uid`) 
SELECT '$pid', '$uid' WHERE NOT EXISTS (SELECT pid, uid FROM `post_favorites`
WHERE pid = '$pid' AND uid = '$uid');");

header("Location: /web_dev_85_php/post-detail.php?pid=$pid");

?>
