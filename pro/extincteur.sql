-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2021 at 11:15 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `extincteur`
--

-- --------------------------------------------------------

--
-- Table structure for table `ordenateur`
--

CREATE TABLE `ordenateur` (
  `id` int(11) NOT NULL,
  `titre` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `prix` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ordenateur`
--

INSERT INTO `ordenateur` (`id`, `titre`, `type`, `prix`) VALUES
(1, 'ahhah', 'ahhh', '200'),
(2, 'JSYJSAKHF', 'EAG', '767'),
(3, 'AJBAR', 'Y', '32442');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ordenateur`
--
ALTER TABLE `ordenateur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ordenateur`
--
ALTER TABLE `ordenateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
