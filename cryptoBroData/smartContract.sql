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
-- Table structure for table `smartContract`
--

CREATE TABLE `smartContract` (
  `SmartContId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `nftId` int(11) NOT NULL,
  `purchTime` date DEFAULT NULL,
  `userAddrHash` varchar(255) DEFAULT NULL,
  `UserAddrTo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `smartContract`
--
ALTER TABLE `smartContract`
  ADD PRIMARY KEY (`SmartContId`),
  ADD KEY `fg_NftId` (`nftId`),
  ADD KEY `fg_UserId` (`userId`),
  ADD KEY `fg_UserAddrHash` (`userAddrHash`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `smartContract`
--
ALTER TABLE `smartContract`
  ADD CONSTRAINT `fg_NftId` FOREIGN KEY (`nftId`) REFERENCES `Nft` (`nftId`),
  ADD CONSTRAINT `fg_UserAddrHash` FOREIGN KEY (`userAddrHash`) REFERENCES `User` (`userAddrHash`),
  ADD CONSTRAINT `fg_UserId` FOREIGN KEY (`userId`) REFERENCES `User` (`userId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
