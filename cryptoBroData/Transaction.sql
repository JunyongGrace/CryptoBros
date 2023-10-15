-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: ictstu-db1.cc.swin.edu.au
-- Generation Time: Oct 15, 2023 at 10:14 AM
-- Server version: 5.5.68-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `s103807301_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `Transaction`
--

CREATE TABLE `Transaction` (
  `TranId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `purchTime` varchar(255) DEFAULT NULL,
  `receiverAddr` varchar(255) DEFAULT NULL,
  `tranHash` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Transaction`
--

INSERT INTO `Transaction` (`TranId`, `userId`, `purchTime`, `receiverAddr`, `tranHash`) VALUES
(1, 2, '2023-10-15 21:02:20', '0x7F53A06E2FF2bB770aDbDe2972153a9dc03CaC10', '0xdd5595a3f964239c703c327d2b08b906992367a1f211639b766876261649ee14'),
(2, 2, '2023-10-15 21:02:53', '0x7F53A06E2FF2bB770aDbDe2972153a9dc03CaC10', '0x49f91f962d36178256583c665aae55e92834917101ca1e0ef88d198ebebb663a'),
(3, 2, '2023-10-15 21:07:56', '0x7F53A06E2FF2bB770aDbDe2972153a9dc03CaC10', '0x3784220d67e17b317edcf036eba3f27a9f426957aff552d11665609d3b85a23c'),
(4, 1, '2023-10-15 21:09:58', '0x7F53A06E2FF2bB770aDbDe2972153a9dc03CaC10', '0x428d5e220d5009f38684e12618d38bacb4073c378873a3270bbfa16fed8235b6');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Transaction`
--
ALTER TABLE `Transaction`
  ADD PRIMARY KEY (`TranId`),
  ADD KEY `fg_userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Transaction`
--
ALTER TABLE `Transaction`
  MODIFY `TranId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Transaction`
--
ALTER TABLE `Transaction`
  ADD CONSTRAINT `fg_userId` FOREIGN KEY (`userId`) REFERENCES `User` (`userId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
