<nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div class="container-fluid">
        <a class="navbar-brand" href="/web_dev_85_php">Web Dev 85 Blog</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/web_dev_85_php/main.php">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class='dropdown-item' href='/web_dev_85_php/main.php?cf='>All</a></li>
                        <?php 
                             $queryCategory = $db->query('SELECT * FROM category');
                                while($item = $queryCategory->fetch_object()){
                                    echo "<li><a class='dropdown-item' href='/web_dev_85_php/main.php?cf=$item->id'>$item->title</a></li>";
                                }
                        ?>
                        
                    </ul>
                </li>
            </ul>
            <?php
            if (!empty($_COOKIE['cuser_id'])) {
            ?>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Add Post
                </button>
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="/web_dev_85_php/profile.php">My Page</a>
                        <a class="dropdown-item" href="api/logout.php">Log Out</a>
                    </div>
                </div>

            <?php
            } else {
            ?>

                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#login-modal">
                    Login
                </button>

            <?php
            }
            ?>

            <form class="d-flex" action="search.php">
                <input name="q" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>