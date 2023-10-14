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
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `userId` int(11) NOT NULL,
  `userAddrHash` varchar(255) NOT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `privateKey` varchar(255) DEFAULT NULL,
  `nftBalance` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`userId`, `userAddrHash`, `userName`, `email`, `password`, `privateKey`, `nftBalance`) VALUES
(1, 'aBAC5eAE814ab4bDfbfF2801c0E5deFFf5a8ABEAcb2b77Bbbea4bD845BAaEe74', 'Arie Whitlow', 'awhitlow0@springer.com', '$2a$04$ON1eUogyawJtTdoE0vxXPe1.VDb5jAjeBufigLeOYdS29.adnVbfO', '2x82990sHWFc4CLJeVLQViXFCl9mjPNZlH3CH770fRfvdRe8Eg1ulf5d49rasD3d', 96),
(2, 'a68f38104CbAd8ecEa2EFAAAB3D0Fda8EeEDb9aaDe1B6235Ed10ceC0b46efb2d', 'Rayna Ingraham', 'ringraham1@flickr.com', '$2a$04$P1yZvvFGgx7w3cT6DCLct.6XczgXy9Sr9DvBjSQ9dHlTh5t3jt2q6', '5vlP599j8ju6874irArw9UouOZYOUKxj9B1Eoc52aP946BKfD21aRgZZeFX1oC1a', 13),
(3, 'aBBeddfBc92f1FcaA7d96BeeBAf2CB6CFD81BdAAfa7Aee748EF9FFE2FF4f5DDB', 'Leola Loines', 'lloines2@forbes.com', '$2a$04$dwcwj76d0aXimkQzjUpMseTL5Ym6HksYthbQIyEzvTB9P2ikrGAXq', '4PgFFzg2ksQ1Bt64rTe439j4GS0om8J4Q0wQ7ZNKah270NK4XN551ep8GR8fp49v', 63),
(4, 'FfbAdE96dACbB9FaBDbaBEc4cB3a5Ac7b2B2AEc0cdEBD6edA76CbBaDF18Efd0a', 'Cully Tankus', 'ctankus3@wiley.com', '$2a$04$jxh.jSkRX9oFc16I19iXy.OFtz.OYAYVqy3r0BzsJJ302W77/LVtm', 'NmSV3C6k5z0DezdzdY8i0dJuGMNrnY5s03bQ3e4LfWn4kC22rsNbf6kG1L9m87jm', 67),
(5, 'af7aDFbBf03DCaDbDF9Da4ecB41d4B8BB8d6Ddae06977BCaDb6cfF9F7Aed1df2', 'Orlan Firebrace', 'ofirebrace4@google.fr', '$2a$04$Z5b2cfKSDDklGthohLetpuBwvcEg3IW4vYufv01MPqLXoeD6S3LTK', '5aK61O9mK8f5LLm2On7pqWZUL3epBvCY46Y7ya65FnL36PL26pqIJV41Mi4849A4', 40),
(6, 'Ac9Da04aAbAcfE1Cb43Cf6BbbcddcF6C209bB3CfdDf6bdECfFbCEf9a1bF5Aa5C', 'Tedie Tarte', 'ttarte5@zimbio.com', '$2a$04$zeNnSMR1UkRWAGjyBFCS/evEaDxi9gwTIOGbbQCKyGIK0OaUAjEn2', 'oW4Sxl9rVH6syEt98huFR61GOyR62wo2801PiUidm20E9x9z6yE549lI2N8LJ5bo', 63),
(7, '66b7bBbEf0fc2cFe799ABBcAdE5CdFB7dDDf49BAd9AF55b4F6cA9bB9bd1eDfBa', 'Allie Felkin', 'afelkin6@patch.com', '$2a$04$6BiGQMs6LGQSrp2YvQ0o3OZgFrDOKguX7hiTvYjH6LAalbUnmtxT2', '623LK5j2LrhE9Gc2x42H2K4iRULDR33JO4YF7ig0o5SEhMk65ftPS9C1VApMryjs', 24),
(8, 'acbDeED08D59dab1bc0DD2dd1D4D738FFFcAD6F2FADf4f01dFAC8B7ed0DA7dEb', 'Byron Kamien', 'bkamien7@engadget.com', '$2a$04$CPkOCvzn/99IUwgg13G2pOiJMM.mLcTd2LeNWr2TE9qb6.fyMiJe.', 'YjPpQ4RreS04OiF512IeM9LhbH3VzLV5XG05cE89NjUY4KCju23pvIop672jcWO4', 14),
(9, '7BaACcEeCaDAF8ec1DcdaeEc8A57eDDCbAE5A1b7facFDc6465CCba7bD2ABfaB6', 'Clim Greasley', 'cgreasley8@yellowpages.com', '$2a$04$9eERuctWBASVtpoBsvWNvOGsR2atMjMjfZow/jg0MH0XM58BzUCDG', '4ilR573nLIpB15ae4tv7xe2iJ0pNNQhrW6qG7VKiTd7o8P26zo114O4h54d36gbt', 39),
(10, 'AFeDAE8E3a76c6fADfaaa8d5AB0dE6DeBDFf5CD4aDaDeeFAf6AD4EdFBdfD7FB6', 'Corby Blessed', 'cblessed9@vk.com', '$2a$04$cZTRTa4SEtBrwQaLwEqz2uJV4bFaSCWEIjW4085Rz580XTuG0SHJG', '3WW06O442VYy7WPd34bplsB5q17GPpdx0SGPq8GtcFuf3eRpQ0TI577VIR7nJM7r', 75),
(11, 'Fb76B7ea6e2E2caC7F1ADb41e63EFd8ED4bEbfBb6a1aF4dCDa3b157dBECcBb66', 'Rosmunda Delafoy', 'rdelafoya@smh.com.au', '$2a$04$oEo5gibgJtt2uHpqjUdOmOKGvYpuXKBrdUVdPVhaEP8Topalm5aka', 'kqJB781W50V4m83F7x5Pe77Jz0f49hssy17cwrah3Ds8WpN5l9iayy7WEWS8mFCz', 54),
(12, 'A9D7B168cB9E91B25BbDC430aF9F42dbAC8Cced72Af6D1ABa746cf4ecEfe2DBB', 'Bud Demko', 'bdemkob@netscape.com', '$2a$04$C8ybxaBEUuHXtT2sXSiAnOdeWWomHR5z77bELwjtGuxHmHM1Y0zzK', '3SlZYebttu5N24m7ph8ecf3PPzx6HzTA9U3J0kjJXa4D1Vy3HYY57Rf0H8EXF71a', 41),
(13, '4AB9772452e3C8dbcDCbA11FCFcCA0AE64bcdBFAAfB1Bea0c241e1fA7fd9b4cF', 'Fey Skellon', 'fskellonc@flickr.com', '$2a$04$G43JonRvl3.Rfx9hdCDepeynOlRUqdIsougN/.0OXKwjTTI.VSfMy', 'B91p8kZVG3dWtmWJ9AFE2yJLv7xdZ7U9I5HH80PKOfK3v0699p5lt5y61tnT3N5o', 37),
(14, 'dacbeFEea8BFBd66cfC96bFcDeBaEEdC541a0e7FfD8b1CfAC7DEFcE2BcfbAfBd', 'Jerald Imbrey', 'jimbreyd@theatlantic.com', '$2a$04$Oz2tkqlgHkNwM0SkAxy2ueqjKSZ.GtLjtbd.zV1sHehVDp7UDRmiG', '0TkCz190D2KIvvT52rPmR05kZ60u51pJoKaa3E8f9n4GSRro4zkULdZG6rII680R', 12),
(15, '8aee5dbF7C43CDdfB75C1AF32c1B5bEBe9FdcccBA5CebeaDFdB6bEBAEAB7bC38', 'Darell Keohane', 'dkeohanee@prnewswire.com', '$2a$04$RsdtEHNGporYuajJTx25hOHTfGtzWa9iNtNgPveFgbeJneMKnh4Ia', 'aH3zT9cSIgZLZmdq5vr9oZ1Eit9hc2g6HeAOl3Ch6NI9p7t6EPcYcDQ4t5rCZ66r', 61),
(16, 'Bcd0ed7cdadbDa12Ec17BBa4F7B1FEEb875ba840AAbee5D6dFCABD7398Cd77d8', 'Kean Tonry', 'ktonryf@usgs.gov', '$2a$04$TwINscRbP.rjtSlaJ51SVurFlrysagV3Gy2scakhof2fEkcPnqx2W', '2wRNEt39mXfJS4UHQOeLFw1736v2Vqr9Q9lbG3R9zsb2nihOg4aLf75c94A1fyKX', 64),
(17, 'aDCE3928f6aadc8fFBa815ae2EDe46AffeD135ab7A02d7A1AF77021B102FC0fd', 'Lind Paffot', 'lpaffotg@weather.com', '$2a$04$nFjHuqPbD3hoDA1KF3OT.uqcYI5T6g82.a8Yk1dPvSFSPGrqZXGKa', 'mS5m25H6mm19sg7u31sZJbl7R9fZW992Bm97R1j7si2j8E63XeELh044j553m7qX', 53),
(18, 'f002FFED44d6e27BCDEcCDb4dFD5aEEd38FDBaacbbb35e07b2E3ECEb89CB93fb', 'Martha Barton', 'mbartonh@yellowbook.com', '$2a$04$BD3y1b/RvD7GeSTy90RJIub4S2Xyifbw3GwzSpi04h5NnQosFA1kG', 'qJSIF0k64T4J8NWuJ13yxEr1gL7eF6EC85h30W6cnn052JSV42sE3gmFfv58k8Y7', 12),
(19, 'F897Ce4cbdac1cDcbED33AF9D4Cccc9aB34cc8e3240E71e68D57fbDcbd5A9BEe', 'Ewell O\'Hoey', 'eohoeyi@mashable.com', '$2a$04$vlwh1aiJ57zeDSiYzv9P2.lz3ggP/tTsSVpLjYTxRQv.9hvNd0JZW', 't08B2u0m2Sr5g5zy42oX4l907Z729khjLdn0sr9C81Z9aD3h8Ea8A6vFsU77DDjo', 91),
(20, 'daC4C0FF4b17B7Fa4a5DdCa24b262fbEE02d32209aaADE5D5E1d6cb5C2D2b37e', 'Drucill Molden', 'dmoldenj@so-net.ne.jp', '$2a$04$78AIYap0B/mZGM/AQ9tMZu7C558wHdS.05SyczRayu0UFgYhw2hTe', '8m199U80c8SW7W300A7fdDg8j5JzZxQ15brTdnLX52hZkjUcXCm0E71W8ofC40rT', 81),
(21, '7dbBf1a96dCaFEedaa8cb7eaDEbBC9FE778AF92ed0E3aEcE014f5B3ced758Efd', 'Carmina Barrable', 'cbarrablek@economist.com', '$2a$04$Ldm5xxPrj7o0IGVUoBk.TuMlPQhxVCWPW8OveHXEfLWj.7Aeo2mRy', 'NCBv14G22YqG2mhiSf0bL5Gn4UDdoZ3XSXmuWePPL3361YGNNdpx4KF2K7ddfK12', 46),
(22, '4Fdbd3f2Cdc72Fbd7fCEb65b9EebEbB4BDb8D5DE1436a4b0Db4dF1bbe4DbAbBb', 'Billi Giddons', 'bgiddonsl@surveymonkey.com', '$2a$04$AeP1ztD6GTHYFgWOOxdltus/nvPpCHixs3dlXPAC75xDa/wXpo3Q2', 'SauFq5Xfa2f20f3c3J0phr6sVhur8d339tV4n5RpAwCgcWB3l7xAhuU1UXvNq7y2', 28),
(23, '8EC78FAccAeDff8A09A9CC2ca93ADB6CDAB0A25D79Fcf17EDe6B2cDF4c5c3610', 'Dun Sear', 'dsearm@dedecms.com', '$2a$04$.tIGdF6OL4HPNGd2A5qFWOmuTTQNcVYoMeJqVMh.SnBZXXfZDE/j.', 'RdFMY5T8YF8PfR9IlsXhjVEOYScDKKANG1797UoM27LsX29hK2nXXmF9pBu2X3Q8', 41),
(24, 'B9D92eBaDaCBce0e1B56fDEcE1bA8accDfeff7BdaE9DACf72a516CA8c09ae5c7', 'Briny Bexley', 'bbexleyn@1688.com', '$2a$04$dAWY6GI0aFSkptcd1Xk4yOfOevHat3SOBbIwD8mb.knHnULjR28MO', '4LTPOrLkaU66S78cXKzIV9nK7stWyL5QA4WMt5eQG4L8OE4sKWU6PR66pUCzW8od', 41),
(25, '9bEB453DDb70dE5eFdCD941FCDD5dDbe2a1E80d3bC135DBc91e626d2dDBE1Bd5', 'Shela Segoe', 'ssegoeo@msu.edu', '$2a$04$kaOYkGjVuRMUW7MEN0ldHeufbiKUhkWs64TZB.HwXbKpQHsz5Ot1W', '96WFTf8AK46KPHnL6ZdPYI6Sur39q9jKW0rLQ4bzo5GTx07R08g25329dT5u9aKt', 44),
(26, 'cdDABBCEDee092bcBfEaCDb3AfeABfE20BCAf1aeDedbDBE29bfF7FaA95bDbCaA', 'Adina Ianilli', 'aianillip@yahoo.co.jp', '$2a$04$5Gn1SWKeC72fNHzC22iCnOdASKQgZdektPpyDEEDyc5JG0SNWnanS', '6t1iaBo6Z10a344W2xYL5xFQ59Q2L4DzdUj9J5Q8r3CsWMCGzy35YuP4A2wmc028', 38),
(27, '9BBD967De0cfE1d08DDA1ee7bFaf01c49bA2f1Ce551B42BaEeDcACdEFfFCEBAc', 'Cletus Westby', 'cwestbyq@acquirethisname.com', '$2a$04$xzCr8ddcrJg508wiQXpnrO35JpB8pdk2BNyV2FVoWxCfA9Wxc7gMm', '60mBDfg9AHe2YmXJ8XN142sMydyy34ucC6f4ROVIv58j5l08k92RR24V2L9h6lTC', 74),
(28, 'aEFBbeB0E9e1E38DFc3d2cAdfA2Ac4bbAeABAb68baE2d7bFFbb1E1a6eeE1AD7A', 'Rhiamon Keach', 'rkeachr@icio.us', '$2a$04$h7YmlrHLKj1drFWREdUBreA2nirhCi8x3FjOkVeyYJ66qosdccCzO', '65STQZ78ocAryh8wz5Lvs8LUm4snE05j0JrTXfUh8YMIuUGK2352E4G433ItJHpd', 82),
(29, '83Cbb972E9c3cfD9fc681d66FB5BCaEd3f0FCcCFFbf2E77eFaa7d3d5dC7ECd31', 'Wash Clue', 'wclues@canalblog.com', '$2a$04$TtFVmObrgC/oAy0Cj/1d/eQyihiWxW9tRaOaOf4n5pRv02S15nFpC', 'f5aj9C13yx00F39wpvAhmE3MJ17o0HdmB553U4EWMBxMnzD5b4BYLQa51P7O0P9e', 57),
(30, 'AfeB8CdcaBFC38baFaCFD23ebdCAFDeba6eA2CCCe92eeDaF8c34dfAf6eDB12B9', 'Irma Cornbill', 'icornbillt@paginegialle.it', '$2a$04$yu3rr0VgZ3sBZFCgtiLoJuGmkn5BAvDWiqS8H.pMg3KwTSUc.pSKu', '7L7D1zgnit7kyh5Jn8NU2yMbRBGsfW2zZ6w9JG81wKGAG0QT3WrF1fiXUBQl6p16', 71);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`userId`,`userAddrHash`),
  ADD UNIQUE KEY `userAddrHash` (`userAddrHash`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
