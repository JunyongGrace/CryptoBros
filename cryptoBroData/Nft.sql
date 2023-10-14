-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 14, 2023 at 02:57 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cryptoBro`
--

-- --------------------------------------------------------

--
-- Table structure for table `Nft`
--

CREATE TABLE `Nft` (
  `nftId` int(11) NOT NULL,
  `nftName` varchar(255) DEFAULT NULL,
  `nftDesc` varchar(255) DEFAULT NULL,
  `price` varchar(7) DEFAULT NULL,
  `publishDate` date DEFAULT NULL,
  `urlToImg` varchar(1024) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Nft`
--

INSERT INTO `Nft` (`nftId`, `nftName`, `nftDesc`, `price`, `publishDate`, `urlToImg`, `category`) VALUES
(1, 'monkey', 'Exclusive virtual asset', '3.37', '2021-04-09', 'https://i.seadn.io/s/primary-drops/0xe9b9ac471f8474d8622eab79897d16e0a8aeb3dc/24657793:about:preview_media:18be772e-4339-445f-b7f3-35ad49dede64.gif?auto=format&dpr=1&w=3840', 'Art'),
(2, '4rpbc0j4', 'Exclusive virtual asset', '1.09', '2021-12-20', NULL, 'Entertainment'),
(3, '73F4zxSZ', 'Exclusive virtual asset', '8.89', '2022-04-07', NULL, 'History'),
(4, '2i0490cE', 'Unique collectible', '3.97', '2021-12-19', NULL, 'Art'),
(5, 'fa4j0y3q', 'Exclusive virtual asset', '6.56', '2021-04-03', NULL, 'Entertainment'),
(6, 'u0ivRpsz', 'Digital masterpiece', '9.48', '2022-12-15', NULL, 'Music'),
(7, 'WbG9i0RZ', 'Digital masterpiece', '6.38', '2021-10-26', NULL, 'Music'),
(8, '7pAZ9gl8', 'Digital masterpiece', '6.23', '2023-11-23', NULL, 'History'),
(9, 'VUn6UcjE', 'Unique collectible', '3.48', '2023-12-24', NULL, 'Entertainment'),
(10, '9c1Cux9g', 'Digital masterpiece', '0.67', '2022-11-05', NULL, 'Entertainment'),
(11, 'eUCguBm7', 'Stunning digital artwork', '7.21', '2022-12-04', NULL, 'Entertainment'),
(12, 'uFs7qc10', 'Exclusive virtual asset', '4.09', '2023-05-04', NULL, 'Entertainment'),
(13, '6j5yshVG', 'Exclusive virtual asset', '6.77', '2023-08-17', NULL, 'History'),
(14, '1M7XRHaS', 'Exclusive virtual asset', '2.74', '2022-04-03', NULL, 'History'),
(15, 'o4aG0KxG', 'Unique collectible', '5.49', '2022-09-19', NULL, 'History'),
(16, 'D3aC40n0', 'Unique collectible', '4.9', '2022-03-23', NULL, 'History'),
(17, 'h38J0151', 'Digital masterpiece', '9.73', '2023-10-07', NULL, 'History'),
(18, 'd21W1yoT', 'Digital masterpiece', '5.96', '2021-06-16', NULL, 'History'),
(19, 'xfYuWVgJ', 'Exclusive virtual asset', '2.02', '2023-08-21', NULL, 'History'),
(20, 'KZOB2cO9', 'Exclusive virtual asset', '6.31', '2023-10-08', NULL, 'History');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Nft`
--
ALTER TABLE `Nft`
  ADD PRIMARY KEY (`nftId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
