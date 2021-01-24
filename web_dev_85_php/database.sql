-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 24, 2021 at 08:36 AM
-- Server version: 5.7.30
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `web85`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `name`, `email`, `password`) VALUES
(45, 'test', 'test@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3'),
(49, 'test', 'test1@gmail.com', '7288edd0fc3ffcbe93a0cf06e3568e28521687bc'),
(60, 'test2', 'test2@gmail.com', '7baba3aa145d5931f5bb6f3e03624a2a7886655e');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `title`) VALUES
(1, 'News'),
(2, 'Sport'),
(3, 'Fashion'),
(4, 'Tech'),
(5, 'Life'),
(6, 'Movies');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `views` int(11) NOT NULL DEFAULT '0',
  `image` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `description`, `category_id`, `views`, `image`) VALUES
(1, 'from db', 'from db from db', 6, 53, 'images/posts/1611476924.jpg'),
(2, 'new blog', 'new', 2, 10, 'images/posts/1611476924.jpg'),
(3, 'about lorem', 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеетЕсть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеетЕсть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет', 5, 32, 'images/posts/1611476924.jpg'),
(4, 'new post with img', ' new post with imgnew post with imgnew post with imgnew post with img new post with imgnew post with imgnew post with imgnew post with img new post with imgnew post with imgnew post with imgnew post with img new post with imgnew post with imgnew post with imgnew post with img new post with imgnew post with imgnew post with imgnew post with img new post with imgnew post with imgnew post with imgnew post with img', 3, 0, 'images/posts/1611476924.jpg'),
(5, 'new post with img', 'new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img new post with img ', 2, 0, 'images/posts/1611476924.jpg'),
(6, 'new post with img', 'new post with img new post with imgnew post with img new post with imgnew post with img new post with imgnew post with img new post with imgnew post with img new post with imgnew post with img new post with imgnew post with img new post with imgnew post with img new post with imgnew post with img new post with imgnew post with img new post with imgnew post with img new post with imgnew post with img new post with img', 2, 2, 'images/posts/1611476924.jpg'),
(7, 'new blog', 'asd', 3, 0, 'images/posts/1611476966.jpg'),
(8, 'new blog', 'asd', 3, 0, 'images/posts/1611477068.jpg'),
(9, 'new img', 'new imgnew img', 6, 0, 'images/posts/1611477211.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `post_favorites`
--

CREATE TABLE `post_favorites` (
  `id` int(11) NOT NULL,
  `pid` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `post_favorites`
--

INSERT INTO `post_favorites` (`id`, `pid`, `uid`) VALUES
(1, 1, 45),
(9, 2, 60);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `review` text NOT NULL,
  `rate` int(11) NOT NULL DEFAULT '5',
  `pid` int(11) NOT NULL,
  `uid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `review`, `rate`, `pid`, `uid`) VALUES
(1, 'Hello first review', 5, 3, 60),
(2, 'Hello Second review with rate 4', 4, 3, 60),
(3, 'Third review with uid', 5, 3, 60),
(4, 'Fourth review with another uid', 3, 3, 60),
(5, 'another uid', 5, 3, 45),
(6, 'first review', 5, 1, 45),
(7, 'hello', 5, 2, 45),
(8, 'test low rating', 1, 3, 45),
(9, 'test high rating', 5, 3, 45),
(10, 'test high rating', 5, 3, 45),
(11, 'test high rating', 5, 3, 45),
(12, 'test high rating', 5, 3, 45),
(13, 'test high rating', 5, 3, 45);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Fk_cat_id` (`category_id`);

--
-- Indexes for table `post_favorites`
--
ALTER TABLE `post_favorites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Fk_fuid_id` (`uid`),
  ADD KEY `Fk_fpid_id` (`pid`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Fk_post_id` (`pid`),
  ADD KEY `Fk_uid_review` (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `post_favorites`
--
ALTER TABLE `post_favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `Fk_cat_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `post_favorites`
--
ALTER TABLE `post_favorites`
  ADD CONSTRAINT `Fk_fpid_id` FOREIGN KEY (`pid`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_fuid_id` FOREIGN KEY (`uid`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `Fk_post_id` FOREIGN KEY (`pid`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_uid_review` FOREIGN KEY (`uid`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
