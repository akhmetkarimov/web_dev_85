<?php
    $q = '';
    if (isset($_GET['q']) && strlen($_GET['q']) > 0) {
        $q = $_GET['q'];
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php include "components/head-libs.php"; ?>

</head>

<body>
    <?php include "components/header.php" ?>
    <h2>Search by word: <?=$q?></h2>
    <div class="container card-deck d-flex justify-content-between flex-wrap">
        <?php
        $queryPosts = $db->query("SELECT p.id, p.description, p.title, p.views, COUNT(r.id) as rev_count, AVG(r.rate) as rating 
        FROM `posts` as p INNER JOIN `reviews` as r ON p.id = r.pid 
        WHERE p.title LIKE '%$q%' OR p.description LIKE '%$q%' GROUP BY p.id");
        while ($post = $queryPosts->fetch_object()) {
        ?>
        
            <div class="card mb-4" style="width: 700px">
                <img class="card-img-top" src="https://www.itl.cat/pngfile/big/177-1776307_-.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">
                        <a href="post-detail.php?pid=<?= $post->id ?>"><?= $post->title ?></a>
                    </h5>
                    <p class="card-text"><?php echo substr($post->description, 0, 255) . ' ...'; ?></p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">
                        <i class="fas fa-eye"></i>
                        <?= $post->views ?>
                    </small>
                    <small class="text-muted">
                        <i class="fas fa-comment"></i>
                        <?= $post->rev_count ?>
                    </small>
                    <small class="text-muted">
                        <i class="fas fa-star"></i>
                        <?php echo number_format($post->rating, 1)?>
                    </small>
                </div>
            </div>

        <?php
        }
        ?>
    </div>

    <?php include "components/footer.php" ?>
    <?php include "components/body-libs.php" ?>

</body>

</html>