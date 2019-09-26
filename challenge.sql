-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 26, 2019 at 04:26 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `challenge`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_match`
--

CREATE TABLE `tb_match` (
  `id` int(11) NOT NULL,
  `season_id` int(11) NOT NULL,
  `group` varchar(255) NOT NULL,
  `match_code` varchar(255) NOT NULL,
  `player1` varchar(255) NOT NULL,
  `player2` varchar(255) NOT NULL,
  `time` time NOT NULL,
  `date` date NOT NULL,
  `venue` varchar(255) NOT NULL,
  `score` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_match`
--

INSERT INTO `tb_match` (`id`, `season_id`, `group`, `match_code`, `player1`, `player2`, `time`, `date`, `venue`, `score`) VALUES
(1, 1, 'C1', 'C1-1-2', 'Mark Zuckerberg', 'Diane Greene', '14:00:00', '0000-00-00', 'Legend', 'Diane Greene gave up'),
(2, 1, 'C1', 'C1-1-3', 'Mark Zuckerberg', 'Ruth Porat', '16:00:00', '0000-00-00', 'Twins', '5-5'),
(3, 1, 'C1', 'C1-2-3', 'Diane Greene', 'Ruth Porat', '14:00:00', '0000-00-00', 'Legend', 'Diane Greene gave up'),
(4, 1, 'C2', 'C2-1-2', 'Elon Musk', 'Eric Schmidt', '18:00:00', '0000-00-00', 'Carmen', '5-5'),
(5, 1, 'C2', 'C2-1-3', 'Elon Musk', 'Liam Wong', '12:00:00', '0000-00-00', 'Twins', '6-4'),
(6, 1, 'C2', 'C2-2-3', 'Eric Schmidt', 'Liam Wong', '14:00:00', '0000-00-00', 'Legend', '5-5'),
(7, 1, 'C3', 'C3-1-2', 'Sergey Brin', 'Lawrence Page', '14:00:00', '0000-00-00', 'Legend', 'Sergey Brin gave up'),
(8, 1, 'C3', 'C3-1-3', 'Sergey Brin', 'John Doerr', '14:00:00', '0000-00-00', 'Legend', 'Sergey Brin gave up'),
(9, 1, 'C3', 'C3-1-4', 'Sergey Brin', 'Sean Almond', '14:00:00', '0000-00-00', 'Legend', 'Sergey Brin gave up'),
(10, 1, 'C3', 'C3-2-3', 'Lawrence Page', 'John Doerr', '19:00:00', '0000-00-00', 'Twins', '6-4'),
(11, 1, 'C3', 'C3-2-4', 'Lawrence Page', 'Sean Almond', '19:00:00', '0000-00-00', 'Carmen', '8-2'),
(12, 1, 'C3', 'C3-3-4', 'John Doerr', 'Sean Almond', '22:00:00', '0000-00-00', 'Twins', '4-6'),
(13, 1, 'C4', 'C4-1-2', 'Ram Shriram', 'Roger Ferguson', '14:00:00', '0000-00-00', 'Professional', '7-3'),
(14, 1, 'C4', 'C4-1-3', 'Ram Shriram', 'Bill Gates', '18:00:00', '0000-00-00', 'Carmen', '4-6'),
(15, 1, 'C4', 'C4-1-4', 'Ram Shriram', 'Troy Sincock', '14:00:00', '0000-00-00', 'Carmen', '9-1'),
(16, 1, 'C4', 'C4-2-3', 'Roger Ferguson', 'Bill Gates', '15:00:00', '0000-00-00', 'Professional', '6-4'),
(17, 1, 'C4', 'C4-2-4', 'Roger Ferguson', 'Troy Sincock', '13:00:00', '0000-00-00', 'Professional', '6-4'),
(18, 1, 'C4', 'C4-3-4', 'Bill Gates', 'Troy Sincock', '12:00:00', '0000-00-00', 'Professional', '9-1'),
(19, 1, 'D1', 'D1-1-2', 'Paul Otellini', 'Ann Mather', '15:00:00', '0000-00-00', 'Twins', '8-2'),
(20, 1, 'D1', 'D1-1-3', 'Paul Otellini', 'Sheryl Sandberg', '14:00:00', '0000-00-00', 'Twins', '7-3'),
(21, 1, 'D1', 'D1-2-3', 'Ann Mather', 'Sheryl Sandberg', '17:00:00', '0000-00-00', 'Carmen', '1-9'),
(22, 1, 'D2', 'D2-1-2', 'David Drummond', 'Elizabeth Katze', '15:00:00', '0000-00-00', 'Legend', '6-4'),
(23, 1, 'D2', 'D2-1-3', 'David Drummond', 'Lex Bayer', '17:00:00', '0000-00-00', 'Professional', '7-3'),
(24, 1, 'D2', 'D2-2-3', 'Elizabeth Katze', 'Lex Bayer', '19:00:00', '0000-00-00', 'Carmen', '6-4'),
(25, 1, 'D3', 'D3-1-2', 'Andrea Belotti', 'Nathan Blecharczyk', '14:00:00', '0000-00-00', 'Legend', '7-3'),
(26, 1, 'D3', 'D3-1-3', 'Andrea Belotti', 'Brian Chesky', '20:00:00', '0000-00-00', 'Legend', '4-6'),
(27, 1, 'D3', 'D3-1-4', 'Andrea Belotti', 'Joe Gebbia', '20:00:00', '0000-00-00', 'Legend', '3-6'),
(28, 1, 'D3', 'D3-2-3', 'Nathan Blecharczyk', 'Brian Chesky', '18:00:00', '0000-00-00', 'Legend', '4-6'),
(29, 1, 'D3', 'D3-2-4', 'Nathan Blecharczyk', 'Joe Gebbia', '15:00:00', '0000-00-00', 'Carmen', '5-5'),
(30, 1, 'D3', 'D3-3-4', 'Brian Chesky', 'Joe Gebbia', '18:00:00', '0000-00-00', 'Legend', '3-7'),
(31, 1, 'D4', 'D4-1-2', 'Douglas Atkin', 'Joe Zadeh', '19:00:00', '0000-00-00', 'Legend', '4-6'),
(32, 1, 'D4', 'D4-1-3', 'Douglas Atkin', 'Chip Conley', '16:00:00', '0000-00-00', 'Carmen', '10-0'),
(33, 1, 'D4', 'D4-2-3', 'Joe Zadeh', 'Chip Conley', '17:00:00', '0000-00-00', 'Carmen', '8-2');

-- --------------------------------------------------------

--
-- Table structure for table `tb_season`
--

CREATE TABLE `tb_season` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_season`
--

INSERT INTO `tb_season` (`id`, `name`, `description`) VALUES
(1, 'season9', 'Mua 9');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_season`
--
ALTER TABLE `tb_season`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_season`
--
ALTER TABLE `tb_season`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
