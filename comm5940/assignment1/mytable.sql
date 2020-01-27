-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 27, 2020 at 08:12 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `disneyprincess`
--

-- --------------------------------------------------------

--
-- Table structure for table `mytable`
--

CREATE TABLE `mytable` (
  `name` varchar(22) NOT NULL,
  `chinese_name` varchar(5) NOT NULL,
  `princess_status` varchar(10) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `species` varchar(7) NOT NULL,
  `royal_status` varchar(11) NOT NULL,
  `nationality` varchar(20) DEFAULT NULL,
  `spouse` varchar(14) DEFAULT NULL,
  `occupation` varchar(24) DEFAULT NULL,
  `animation` varchar(38) NOT NULL,
  `original` varchar(86) DEFAULT NULL,
  `first_appearance` varchar(50) NOT NULL,
  `live_action` varchar(29) DEFAULT NULL,
  `actress` varchar(14) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mytable`
--

INSERT INTO `mytable` (`name`, `chinese_name`, `princess_status`, `age`, `species`, `royal_status`, `nationality`, `spouse`, `occupation`, `animation`, `original`, `first_appearance`, `live_action`, `actress`) VALUES
('Alice', '爱丽丝', 'Unofficial', NULL, 'Human', 'no', NULL, NULL, NULL, 'Alice in Wonderland (1951)', 'Lewis Carroll\'s children\'s novel Alice\'s Adventures in Wonderland', '《爱丽丝梦游仙境》Alice in Wonderland (1951)', 'Alice in Wonderland (2010)', 'Mia Wasikowska'),
('Anna', '安娜', 'Unofficial', 18, 'Human', 'by birth', 'Kingdom of Arendelle', 'Kristoff', 'Princess', 'Frozen (2013)', 'Gerda, a character of \"The Snow Queen\", a Danish fairytale by Hans Christian Andersen', '《冰雪奇缘》Frozen (2013)', NULL, NULL),
('Ariel', '爱丽儿', 'Official', 16, 'Mermaid', 'by birth', NULL, 'Prince Eric', NULL, 'The Little Mermaid (1989)', 'Hans Christian Andersen\'s fairy tale', '《小美人鱼》The Little Mermaid (1989)', 'The Little Mermaid (upcoming)', 'Halle Bailey'),
('Aurora', '奥罗拉', 'Official', 16, 'Human', 'by birth', 'Atlantican', 'Prince Phillip', NULL, 'Sleeping Beauty (1959)', 'Charles Perrault\'s fairy tale', '《睡美人》Sleeping Beauty (1959)', 'Maleficent (2014)', 'Elle Fanning'),
('Belle', '贝儿', 'Official', 17, 'Human', 'by marriage', 'French', 'The Beast', 'Inventor', 'Beauty and the Beast (1991)', 'Gabrielle-Suzanne de Villeneuve\'s fairy tale', '《美女与野兽》Beauty and the Beast (1991)', 'Beauty and the Beast (2017)', 'Emma Watson'),
('Cinderella', '仙杜瑞拉', 'Official', 19, 'Human', 'by marriage', NULL, 'Prince Henry', 'Scullery maid', 'Cinderella (1950)', 'Charles Perrault\'s fairy tale', '《灰姑娘》Cinderella (1950)', 'Cinderella (2015)', 'Lily James'),
('Elsa', '爱莎', 'Unofficial', 21, 'Human', 'by birth', 'Kingdom of Arendelle', NULL, 'Queen', 'Frozen (2013)', 'The title character of \"The Snow Queen\", a Danish fairytale by Hans Christian Andersen', '《冰雪奇缘》Frozen (2013)', NULL, NULL),
('Faline', '费琳', 'Unofficial', NULL, 'Deer', 'no', NULL, 'Bambi', NULL, 'Bambi (1942)', 'The character of the same name from Felix Salten\'s Bambi: A Life in the Woods', '《小鹿斑比》Bambi (1942)', NULL, NULL),
('Jane Porter', '简·波特', 'Unofficial', NULL, 'Human', 'no', 'British', 'Tarzan', 'Ethnologist', 'Tarzan (1999)', NULL, 'Tarzan of the Apes by Edgar Rice Burroughs', '《泰山》Tarzan (1999)', NULL),
('Jasmine', '茉莉', 'Official', 15, 'Human', 'by birth', 'Agrabah', 'Aladdin', NULL, 'Aladdin (1992)', 'Antoine Galland\'s fairy tale', '《阿拉丁》Aladdin (1992)', 'Aladdin (2019)', 'Naomi Scott'),
('Kiara', '琪拉雅', 'Unofficial', NULL, 'Lion', 'by birth', 'Africa', 'Kovu', NULL, 'The Lion King II: Simba\'s Pride (1998)', 'William Shakespeare\'s Romeo and Juliet', '《狮子王2：辛巴的荣耀》The Lion King II: Simba\'s Pride (1998)', NULL, NULL),
('Lilo', '莉萝', 'Unofficial', NULL, 'Human', 'no', 'Hawaiian', NULL, NULL, 'Lilo & Stitch (2002)', 'The Walt Disney Company', '《星际宝贝》Lilo & Stitch (2002)', NULL, NULL),
('Maid Marian', '玛丽安小姐', 'Unofficial', NULL, 'Fox', 'no', 'Englander', 'Robin Hood', NULL, 'Robin Hood (1973)', 'The legend of Robin Hood', '《罗宾汉》Robin Hood (1973)', NULL, NULL),
('Megara', '梅格拉', 'Unofficial', NULL, 'Human', 'no', 'Greek', 'Hercules', 'Minion of Hades', 'Hercules (1997)', 'Greek mythology, the wife of Hercules', '《大力士》Hercules (1997)', NULL, NULL),
('Merida', '梅莉达', 'Official', 16, 'Human', 'by birth', 'Scottish', NULL, NULL, 'Brave (2012)', 'The Walt Disney Company', '《勇敢传说》Brave (2012)', NULL, NULL),
('Minnie Mouse', '米妮老鼠', 'Unofficial', NULL, 'Mouse', 'no', NULL, 'Mickey Mouse', 'Entertainer', 'Steamboat Willie (1928)', 'Walt Disney', '《威利号汽船》Steamboat Willie (1928)', NULL, NULL),
('Moana', '莫娜', 'Official', 16, 'Human', 'no', 'Polynesian', NULL, NULL, 'Moana (2016)', 'The Walt Disney Company', '《海洋奇缘》Moana (2016)', NULL, NULL),
('Mulan', '花木兰', 'Official', 16, 'Human', 'no', 'Chinese', 'Li Shang', 'Warrior', 'Mulan (1998)', 'Ballad of Fa Mulan', '《花木兰》Mulan (1998)', 'Mulan (2020)', 'Yifei Liu'),
('Pocahontas', '宝嘉康蒂', 'Official', 18, 'Human', 'by birth', 'Powhatan', 'Rolfe', 'Powhatan paramount chief', 'Pocahontas (1995)', 'The life of the Native American woman of the same name', '《风中奇缘》Pocahontas (1995)', NULL, NULL),
('Rapunzel', '乐佩', 'Official', 18, 'Human', 'by birth', 'Kingdom of Corona', 'Flynn Rider', NULL, 'Tangled (2010)', 'Brothers Grimm\'s fairy tale', '《魔法奇缘》Tangled (2010)', NULL, NULL),
('Snow White', '白雪公主', 'Official', 14, 'Human', 'by birth', 'Germany', 'Prince Florian', 'Scullery maid', 'Snow White and the Seven Dwarfs (1937)', 'Brothers Grimm\'s fairy tale', '《白雪公主与七个小矮人》Snow White and the Seven Dwarfs (1937)', 'Snow White  (upcoming)', NULL),
('Tiana', '蒂安娜', 'Official', 19, 'Human', 'by marriage', 'American', 'Prince Naveen', NULL, 'The Princess and the Frog (2009)', 'Brothers Grimm\'s fairy tale', '《公主与青蛙》The Princess and the Frog (2009)', NULL, NULL),
('Tinker Bell', '叮当小仙女', 'Unofficial', NULL, 'Fairy', 'no', NULL, NULL, 'Tinker fairy', 'Dumbo (1941)', 'J. M. Barrie\'s 1904 play Peter Pan and its 1911 novelization Peter and Wendy', '《小飞象》Dumbo (1941)', NULL, NULL),
('Vanellope von Schweetz', '云妮洛普', 'Unofficial', 9, 'Human', 'no', NULL, NULL, 'Racer', 'Wreck-It Ralph (2012)', 'The Walt Disney Company', '《无敌破坏王》Wreck-It Ralph (2012)', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mytable`
--
ALTER TABLE `mytable`
  ADD PRIMARY KEY (`name`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
