-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 02, 2020 at 10:59 AM
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
-- Table structure for table `home`
--

CREATE TABLE `home` (
  `name` varchar(22) DEFAULT NULL,
  `chinesename` varchar(5) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `species` varchar(7) DEFAULT NULL,
  `animation` varchar(38) DEFAULT NULL,
  `img_url` varchar(87) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `home`
--

INSERT INTO `home` (`name`, `chinesename`, `status`, `species`, `animation`, `img_url`) VALUES
('Snow White', '白雪公主', 'Official', 'Human', 'Snow White and the Seven Dwarfs (1937)', 'https://funmoneymom.com/wp-content/uploads/2018/09/snow-white-e1537975169882.jpeg'),
('Cinderella', '仙杜瑞拉', 'Official', 'Human', 'Cinderella (1950)', 'https://funmoneymom.com/wp-content/uploads/2018/09/Cinderella.jpg'),
('Aurora', '奥罗拉', 'Official', 'Human', 'Sleeping Beauty (1959)', 'https://funmoneymom.com/wp-content/uploads/2018/09/Aurora.jpg'),
('Ariel', '爱丽儿', 'Official', 'Mermaid', 'The Little Mermaid (1989)', 'https://funmoneymom.com/wp-content/uploads/2018/09/Ariel-e1537975034404.jpeg'),
('Belle', '贝儿', 'Official', 'Human', 'Beauty and the Beast (1991)', 'https://funmoneymom.com/wp-content/uploads/2018/09/Belle-e1537975077685.jpeg'),
('Jasmine', '茉莉', 'Official', 'Human', 'Aladdin (1992)', 'https://funmoneymom.com/wp-content/uploads/2018/09/Jasmine.jpg'),
('Pocahontas', '宝嘉康蒂', 'Official', 'Human', 'Pocahontas (1995)', 'https://funmoneymom.com/wp-content/uploads/2018/09/Pocahontas.jpg'),
('Mulan', '花木兰', 'Official', 'Human', 'Mulan (1998)', 'https://funmoneymom.com/wp-content/uploads/2018/09/Mulan-500x280.jpeg'),
('Tiana', '蒂安娜', 'Official', 'Human', 'The Princess and the Frog (2009)', 'https://funmoneymom.com/wp-content/uploads/2018/09/Tiana.jpg'),
('Rapunzel', '乐佩', 'Official', 'Human', 'Tangled (2010)', 'https://funmoneymom.com/wp-content/uploads/2018/09/Rapunzel.jpg'),
('Merida', '梅莉达', 'Official', 'Human', 'Brave (2012)', 'https://funmoneymom.com/wp-content/uploads/2018/09/Merida.jpg'),
('Moana', '莫娜', 'Official', 'Human', 'Moana (2016)', 'https://i.ytimg.com/vi/S0gfg1Nm9GU/maxresdefault.jpg'),
('Minnie Mouse', '米妮老鼠', 'Unofficial', 'Mouse', 'Steamboat Willie (1928)', 'https://dl.airtable.com/.attachmentThumbnails/4474d0b6c72c95cef71555380c116444/d15f8ca6'),
('Tinker Bell', '叮当小仙女', 'Unofficial', 'Fairy', 'Dumbo (1941)', 'https://dl.airtable.com/.attachmentThumbnails/bd94cdd6a09d6cd5661406c04ca9fe15/9785be95'),
('Faline', '费琳', 'Unofficial', 'Deer', 'Bambi (1942)', 'https://dl.airtable.com/.attachmentThumbnails/a4ff94083f6cff4c25b67728168e8204/0cee0e17'),
('Alice', '爱丽丝', 'Unofficial', 'Human', 'Alice in Wonderland (1951)', 'https://dl.airtable.com/.attachmentThumbnails/693b74733c240589a6e7889ba49e97ba/ca6a8184'),
('Maid Marian', '玛丽安小姐', 'Unofficial', 'Fox', 'Robin Hood (1973)', 'https://dl.airtable.com/.attachmentThumbnails/366c747b7739f5b7b2331367931bf455/292cb549'),
('Megara', '梅格拉', 'Unofficial', 'Human', 'Hercules (1997)', 'https://dl.airtable.com/.attachmentThumbnails/92f28a82129e7a83b2b8bfbb7d0dda4a/fb862525'),
('Kiara', '琪拉雅', 'Unofficial', 'Lion', 'The Lion King II: Simba\'s Pride (1998)', 'https://dl.airtable.com/.attachmentThumbnails/ed8d4f9a64afbeaf07ecadbae773c037/0a917c98'),
('Jane Porter', '简·波特', 'Unofficial', 'Human', 'Tarzan (1999)', 'https://dl.airtable.com/.attachmentThumbnails/c0e11ba9044d25e17a4e1c3d516b9c88/3aa591da'),
('Lilo', '莉萝', 'Unofficial', 'Human', 'Lilo & Stitch (2002)', 'https://dl.airtable.com/.attachmentThumbnails/c5d4095f7060cd4a69b3b11bec6e2e99/63c9b00f'),
('Vanellope von Schweetz', '云妮洛普', 'Unofficial', 'Human', 'Wreck-It Ralph (2012)', 'https://dl.airtable.com/.attachmentThumbnails/099be86834ea90221703c50931017ff0/acd489df'),
('Elsa', '爱莎', 'Unofficial', 'Human', 'Frozen (2013)', 'https://dl.airtable.com/.attachmentThumbnails/885f310368231c0fc9ba44ee9e0be280/b298e059'),
('Anna', '安娜', 'Unofficial', 'Human', 'Frozen (2013)', 'https://dl.airtable.com/.attachmentThumbnails/f1df9aa293432da5d2d86a6ce28455bd/cfa6fe3d');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
