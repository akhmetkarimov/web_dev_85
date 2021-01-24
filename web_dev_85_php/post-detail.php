<?php
include "config/database.php";
$pid = $_GET['pid'];
$db->query("UPDATE posts SET views = views + 1 WHERE id = $pid");
$queryPosts = $db->query("SELECT * FROM posts WHERE id = $pid");
$post = $queryPosts->fetch_object();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php include "components/head-libs.php" ?>

</head>

<body>
    <?php include "components/header.php" ?>

    <div class="card mb-4 container" style="width: 700px">
        <img class="card-img-top" src="<?=$post->image?>" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title d-flex justify-content-between">
                <?= $post->title ?>
                <?php
                if (!empty($_COOKIE['cuser_id'])) {
                    $uid = $_COOKIE['cuser_id'];
                    $queryFav = $db->query("SELECT * FROM `post_favorites` WHERE pid = '$post->id' AND uid = '$uid'");
                    $favPath = "api/posts/fav.php";
                    $btnClass = "btn-secondary";

                    if ($queryFav->num_rows == 1) {
                        $favPath = "api/posts/delete_fav.php";
                        $btnClass = "btn-primary";
                    }

                    echo "<form action='$favPath' method='POST'>
                    <input type='hidden' name='pid' value='$post->id'>
                    <input type='hidden' name='uid' value='$uid'>
                        <button class='btn $btnClass'> 
                            <i class='fas fa-star'></i> 
                        </button>
                    </form>";
                }    
                ?>
            </h5>
            <p class="card-text"><?= $post->description ?></p>
        </div>
        <?php
        if (!empty($_COOKIE['cuser_id'])) {
        ?>
            <div class="card-footer">
                <form action="api/posts/review.php" method="POST">
                    <div class="form-group">
                        <label for="review">Add your Review</label>
                        <textarea class="form-control" id="review" name="review" rows="3"></textarea>
                    </div>
                    <input type="hidden" name="postid" value="<?= $post->id ?>">
                    <input type="hidden" name="uid" value='<?= $_COOKIE['cuser_id'] ?>'>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Rate</label>
                        <select class="form-control" name="rate" id="exampleFormControlSelect1">
                            <option value='5'>5</option>
                            <option value='4'>4</option>
                            <option value='3'>3</option>
                            <option value='2'>2</option>
                            <option value='1'>1</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        <?php
        }
        ?>
        <div class="card-footer">
            <?php
            // SELECT rev.id, rev.review, acc.name FROM `reviews` as rev INNER JOIN `account` as acc ON rev.uid = acc.id
            $queryReviews = $db->query("SELECT rev.review, acc.name FROM reviews as rev INNER JOIN account as acc ON rev.uid = acc.id WHERE  pid = $pid");
            while ($review = $queryReviews->fetch_object()) {
                echo "<div class='d-flex justify-content-between'>
                    <p>$review->review</p> <p>$review->name</p>
                    </div>
                    ";
            }
            ?>
        </div>
    </div>


    <?php include "components/footer.php" ?>
    <?php include "components/body-libs.php" ?>

</body>

</html>

<?php

?>