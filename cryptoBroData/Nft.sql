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
-- Table structure for table `Nft`
--

CREATE TABLE `Nft` (
  `nftId` int(11) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `nftName` varchar(255) DEFAULT NULL,
  `nftDesc` varchar(255) DEFAULT NULL,
  `price` varchar(7) DEFAULT NULL,
  `publishDate` date DEFAULT NULL,
  `urlToImg` varchar(1024) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Nft`
--

INSERT INTO `Nft` (`nftId`, `userId`, `nftName`, `nftDesc`, `price`, `publishDate`, `urlToImg`, `category`) VALUES
(1, '1', 'Faces', 'Two faces staring into your soul', '3.37', '2021-04-09', 'https://i.seadn.io/s/primary-drops/0xe9b9ac471f8474d8622eab79897d16e0a8aeb3dc/24657793:about:preview_media:18be772e-4339-445f-b7f3-35ad49dede64.gif?auto=format&dpr=1&w=3840', 'Art'),
(2, '2', 'Alien', 'An alien from outer space', '0.01', '2021-12-20', 'https://i.seadn.io/gcs/files/primary-drop-files/shellzorb/carousel1-min.jpg?auto=format&dpr=1&w=1920', 'Entertainment'),
(3, '1', 'Gladiator Cyborg', 'Half human half machine', '8.89', '2022-04-07', 'https://i.seadn.io/gcs/files/primary-drop-files/shellzorb/carousel2-min.jpg?auto=format&dpr=1&w=1920', 'History'),
(4, '2', 'Lantern Ghost', 'A ghost of the lantern festival', '3.97', '2021-12-19', 'https://i.seadn.io/gcs/files/primary-drop-files/shellzorb/carousel4-min.jpg?auto=format&dpr=1&w=1920', 'Art'),
(5, '1', 'Battle Fighter', 'A seasoned warrior', '6.56', '2021-04-03', 'https://i.seadn.io/gcs/files/d800965745cb71e118db3ffc62106737.png?auto=format&dpr=1&w=1000', 'Entertainment'),
(6, '1', 'Musical Cyborg', 'Half human, half machine. Fully musical', '9.48', '2022-12-15', 'https://i.seadn.io/gcs/files/primary-drop-files/shellzorb/carousel3-min.jpg?auto=format&dpr=1&w=1920', 'Music'),
(7, '1', 'Nomadic Musician', 'A travelling musician', '6.38', '2021-10-26', 'https://i.seadn.io/gcs/files/c3ed90f155065d1ee4607a4b358dcc46.png?auto=format&dpr=1&w=384', 'Music'),
(8, '1', 'Ancient Warlord', 'A warlord from the past', '6.23', '2023-11-23', 'https://i.seadn.io/gcs/files/69e70ce7d38195544bf42b4a86216586.png?auto=format&dpr=1&w=384', 'History'),
(9, '1', 'Fire Lord', 'The king of the fire kingdom', '3.48', '2023-12-24', 'https://i.seadn.io/gcs/files/d0820bb0859712569632e88528ae28b1.png?auto=format&dpr=1&w=384', 'Entertainment'),
(10, '1', 'Laser Beamer', 'He shoots laser beams', '0.67', '2022-11-05', 'https://i.seadn.io/gcs/files/6cef7cc65fa05929d12baf13ce66140f.png?auto=format&dpr=1&w=384', 'Entertainment'),
(11, '1', 'Blossom Battler', 'A warrior of the blossom forest ', '7.21', '2022-12-04', 'https://i.seadn.io/gcs/files/49cdea3d89a68ee18fc39d4cdc9ab843.png?auto=format&dpr=1&w=384', 'Entertainment'),
(12, '1', 'Masked Hero', 'No one knows their identity', '4.09', '2023-05-04', 'https://i.seadn.io/gcs/files/71416969abbbba122fe1fe4a8a92d4d5.png?auto=format&dpr=1&w=384', 'Entertainment'),
(13, '1', 'Samuri Turtle', 'A samuri from the past', '6.77', '2023-08-17', 'https://i.seadn.io/gcs/files/5eec42a6c118f2035b30ef8211d063e7.png?auto=format&dpr=1&w=384', 'History'),
(14, '1', 'Soldier Turtle', 'An excellent field soldier', '2.74', '2022-04-03', 'https://i.seadn.io/gcs/files/6804294fe8ba575ddbbee785cdf28dda.png?auto=format&dpr=1&w=384', 'History'),
(15, '1', 'Village Turtle', 'A typical turtle from the village', '5.49', '2022-09-19', 'https://i.seadn.io/gcs/files/a24cbc4e7da577e51b6f0d3bc7415186.png?auto=format&dpr=1&w=384', 'History'),
(16, '1', 'Rebel Turtle', 'Fighting for the rebel cause', '4.9', '2022-03-23', 'https://i.seadn.io/gcs/files/5a2967a68133b19f519b4d6f45496b05.png?auto=format&dpr=1&w=384', 'History'),
(17, '1', 'Bamboo Turtle', 'A bamboo forest dweller', '9.73', '2023-10-07', 'https://i.seadn.io/gcs/files/77f59561bf9b8e14957ecd2ebf9f893b.png?auto=format&dpr=1&w=384', 'History'),
(18, '1', 'Wizard Turtle', 'A mage turtle', '5.96', '2021-06-16', 'https://i.seadn.io/gcs/files/bd6f7cedb1d9a196a04a7473306e0cf1.png?auto=format&dpr=1&w=384', 'History'),
(19, '1', 'Battlefield Turtle', 'The turtle of the battlefield', '2.02', '2023-08-21', 'https://i.seadn.io/gcs/files/7ca0bcee5a8b0ca4fd4a135960b95575.png?auto=format&dpr=1&w=384', 'History'),
(20, '1', 'Peaceful Turtle', 'An advocate for peace', '6.31', '2023-10-08', 'https://i.seadn.io/gcs/files/bfa3d53c9dd5197d21922c53f0511824.png?auto=format&dpr=1&w=384', 'History'),
(21, '1', 'Graffiti Turtle', 'A rebellious artist', '4.5', '2023-10-04', 'https://i.seadn.io/gcs/files/661b5bdc33d43ee38bd895adf2cfb8d0.png?auto=format&dpr=1&w=384', 'Art'),
(22, '1', 'Pluto', 'A fighter', '3.2', '2021-10-13', 'https://i.seadn.io/gcs/files/9d60bfd3b3278b524c1b56f179c55e93.png?auto=format&dpr=1&w=384', 'Entertainment'),
(23, '1', 'Alien', 'From another reality', '7.5', '2023-10-02', 'https://i.seadn.io/gcs/files/d59eddf3ea8b5773d1cf5c17d75d600a.png?auto=format&dpr=1&w=384', 'Entertainment'),
(24, '1', 'Robo', 'Robot disguised as Turtle', '2.2', '2023-10-10', 'https://i.seadn.io/gcs/files/3cb8ec1bef107708ae1cdd0e9a04f9a4.png?auto=format&dpr=1&w=384', 'Art'),
(25, '1', 'Fire Warrior', 'From the fire fields', '5.5', '2023-10-05', 'https://i.seadn.io/gcs/files/bb889a90d2f9508c134532f9e088a318.png?auto=format&dpr=1&w=384', 'Art'),
(26, '1', 'Rev Head', 'A car enthusiast ', '2.4', '2023-08-02', 'https://i.seadn.io/gcs/files/9a32937da061756347a0258e6c43359d.png?auto=format&dpr=1&w=384', 'Entertainment'),
(27, '1', 'Archer', 'An expert of archery', '4.7', '2023-09-09', 'https://i.seadn.io/gcs/files/05a4952aaa9f1cbc91e94a7e38ff596d.png?auto=format&dpr=1&w=384', 'Art'),
(28, '1', 'Eyes', 'The eyes that see all', '4.3', '2023-06-14', 'https://i.seadn.io/gcs/files/99c9cc303a41a4efb2a156c5baecf6c3.png?auto=format&dpr=1&w=384', 'Art'),
(29, '1', 'Flowers', 'Man of the flower garden', '2.6', '2023-10-11', 'https://i.seadn.io/gcs/files/28cd7fb73d3a3362e6cca66673031874.png?auto=format&dpr=1&w=384', 'Art'),
(30, '1', 'Luna', 'Moon explorer', '5.3', '2023-09-21', 'https://i.seadn.io/gcs/files/a24cbc4e7da577e51b6f0d3bc7415186.png?auto=format&dpr=1&w=384', 'Entertainment'),
(31, '1', 'Purple Flow', 'Cave explorer', '8.1', '2023-10-03', 'https://i.seadn.io/gcs/files/d71e6556249574b77238bfa361fc1d9a.png?auto=format&dpr=1&w=384', 'Art'),
(32, '1', 'Luna Swordsman', 'Fighter of the moon', '3.3', '2023-09-01', 'https://i.seadn.io/gcs/files/790217bcb9f6ccb530b359b66e308270.png?auto=format&dpr=1&w=1000', 'History'),
(33, '1', 'MoHawk', 'Rebel of planet 6', '5.8', '2023-10-04', 'https://i.seadn.io/gcs/files/a8cefa726f1e366cd691c87cf151fea9.png?auto=format&dpr=1&w=384', 'Entertainment'),
(34, '1', 'Wolf ', 'Wolf that seeks vengeance ', '7.1', '2023-10-01', 'https://i.seadn.io/s/raw/files/2e5ffa7835e7dbbd901ca77357827ea6.jpg?auto=format&dpr=1&w=384', 'History'),
(35, '1', 'Princess', 'The princess of Planet 6', '3.2', '2023-06-10', 'https://i.seadn.io/gcs/files/b365055216c5abe5beb211d8118b588d.png?auto=format&dpr=1&w=384', 'Art'),
(36, '1', 'Farmer', 'A happy farmer', '2.5', '2023-05-01', 'https://i.seadn.io/gcs/files/8be424c1558b49b4c05aafc735fd4af4.png?auto=format&dpr=1&w=384', 'History'),
(37, '1', 'Deadly', 'A dangerous rogue ', '5.6', '2023-02-06', 'https://i.seadn.io/gcs/files/92ee1a3913858eeda01cd383daa84482.png?auto=format&dpr=1&w=384', 'Art'),
(38, '1', 'The Optimist', 'A bright mind', '3.6', '2023-05-03', 'https://i.seadn.io/gcs/files/f479bb31c9ca7d1253c0aaf416f8ba89.png?auto=format&dpr=1&w=384', 'History'),
(39, '1', 'Cyber Officer', 'The cyber Enforcer', '7.2', '2022-10-04', 'https://i.seadn.io/gcs/files/328c37e5309e8e2cfcfd963242084136.png?auto=format&dpr=1&w=384', 'Entertainment'),
(40, '1', 'Desert Rover', 'Custodian of the desert', '1.9', '2022-05-10', 'https://i.seadn.io/gcs/files/ffbab9f865b6acece20e3e73d1c89c04.png?auto=format&dpr=1&w=384', 'Art'),
(41, '1', 'Dark Luna Ranger', 'Roams the dark side of the moon', '4.7', '2022-02-16', 'https://i.seadn.io/gcs/files/66cf0a1092dc3c6162cddcf23375612c.png?auto=format&dpr=1&w=384', 'Entertainment'),
(42, '1', 'Sullen Soldier', 'The soldier after battle', '7.2', '2022-09-07', 'https://i.seadn.io/gcs/files/67a06816f54196f6508715c113985ce9.png?auto=format&dpr=1&w=384', 'History'),
(43, '1', 'Pink', 'The pink one', '6.2', '2022-09-14', 'https://i.seadn.io/gcs/files/bb5e076fe60489fcdb8c72b09d1beacc.png?auto=format&dpr=1&w=384', 'History'),
(44, '1', 'Sacred Mage', 'A wise wizard', '4.2', '2022-11-08', 'https://i.seadn.io/gcs/files/07381d81cc61b152999b02fefad1103b.png?auto=format&dpr=1&w=384', 'Art'),
(45, '1', 'Fish Tank', 'A fish whisperer', '7.1', '2022-11-08', 'https://i.seadn.io/gcs/files/d8c4596cad3597a57b4a5754ff47c9b6.png?auto=format&dpr=1&w=384', 'Entertainment'),
(46, '1', 'Strong One', 'A strong young warrior', '3.7', '2022-11-09', 'https://i.seadn.io/gcs/files/cd410dfa5b8a8296865279cd51fe7cd3.png?auto=format&dpr=1&w=384', 'History'),
(47, '1', 'The Unleashed', 'Once banished, he roams free once more', '3.7', '2023-04-05', 'https://i.seadn.io/gcs/files/cc4f9668379080977744e4d2f65384c7.png?auto=format&dpr=1&w=384', 'Entertainment'),
(48, '1', 'Axe wielder', 'A warrior who is handy with an axe', '6.2', '2023-10-03', 'https://i.seadn.io/gcs/files/249484c984fde2f70a00b045dbfe2842.png?auto=format&dpr=1&w=384', 'History'),
(49, '1', 'Top Gun', 'An accurate shooter', '5.0', '2023-04-01', 'https://i.seadn.io/gcs/files/62216b32c879a2352e5e85298785b7c2.png?auto=format&dpr=1&w=384', 'Art'),
(50, '1', 'Musical Wizard', 'A wizard with the power of music', '8.8', '2023-08-10', 'https://i.seadn.io/gcs/files/ba16a253f3988957fc4500dcd19b7341.png?auto=format&dpr=1&w=384', 'Music');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Nft`
--
ALTER TABLE `Nft`
  ADD PRIMARY KEY (`nftId`),
  ADD KEY `userId` (`userId`(191));

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Nft`
--
ALTER TABLE `Nft`
  MODIFY `nftId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
