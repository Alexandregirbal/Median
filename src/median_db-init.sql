-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 12 mai 2019 à 02:20
-- Version du serveur :  5.7.24
-- Version de PHP :  7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `median_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `marks`
--

DROP TABLE IF EXISTS `marks`;
CREATE TABLE IF NOT EXISTS `marks` (
  `IdMark` int(11) NOT NULL AUTO_INCREMENT,
  `MarkM` float DEFAULT NULL,
  `ScaleM` int(11) DEFAULT NULL,
  `CoefM` int(11) DEFAULT NULL,
  `IdSubject` int(11) NOT NULL,
  `EmailUser` varchar(100) NOT NULL,
  PRIMARY KEY (`IdMark`),
  KEY `mark_foreign` (`EmailUser`) USING BTREE,
  KEY `subject_foreign` (`IdSubject`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `marks`
--

INSERT INTO `marks` (`IdMark`, `MarkM`, `ScaleM`, `CoefM`, `IdSubject`, `EmailUser`) VALUES
(1, 10, 20, 1, 1, 'alexandre.girbal@etu.umontpellier.fr'),
(2, 12, 20, 1, 1, 'alexandre.girbal@etu.umontpellier.fr'),
(3, 11, 20, 4, 1, 'alexandre.girbal@etu.umontpellier.fr'),
(4, 8.83, 20, 1, 2, 'alexandre.girbal@etu.umontpellier.fr'),
(6, 16, 20, 3, 1, 'hugo.brando@etu.umontpellier.fr');

-- --------------------------------------------------------

--
-- Structure de la table `sections`
--

DROP TABLE IF EXISTS `sections`;
CREATE TABLE IF NOT EXISTS `sections` (
  `Section` varchar(5) NOT NULL,
  `SchoolSubject` varchar(100) DEFAULT NULL,
  `Year` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`Section`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `sections`
--

INSERT INTO `sections` (`Section`, `SchoolSubject`, `Year`) VALUES
('EGC3', 'Eau et génie civil', '3'),
('EGC4', 'Eau et génie civil', '4'),
('EGC5', 'Eau et génie civil', '5'),
('GBA3', 'Génie biologique et agroalimentaire', '3'),
('GBA4', 'Génie biologique et agroalimentaire', '4'),
('GBA5', 'Génie biologique et agroalimentaire', '5'),
('IG3', 'Informatique et gestion', '3'),
('IG4', 'Informatique et gestion', '4'),
('IG5', 'Informatique et gestion', '5'),
('MAT3', 'Matériaux', '3'),
('MAT4', 'Matériaux', '4'),
('MAT5', 'Matériaux', '5'),
('MEA3', 'Microélectronique et automatique', '3'),
('MEA4', 'Microélectronique et automatique', '4'),
('MEA5', 'Microélectronique et automatique', '5'),
('MI3', 'Mécanique et intéractions', '3'),
('MI4', 'Mécanique et intéractions', '4'),
('MI5', 'Mécanique et intéractions', '5'),
('MSI3', 'Mécanique structures industrielles', '3'),
('MSI4', 'Mécanique structures industrielles', '4'),
('MSI5', 'Mécanique structures industrielles', '5'),
('PEIP1', 'Parcours des écoles d\'ingénieurs Polytech', '1'),
('PEIP2', 'Parcours des écoles d\'ingénieurs Polytech', '2'),
('SE3', 'Systèmes embarqués', '3'),
('SE4', 'Systèmes embarqués', '4'),
('SE5', 'Systèmes embarqués', '5'),
('STE3', 'Sciences et technologies de l\'eau', '3'),
('STE4', 'Sciences et technologies de l\'eau', '4'),
('STE5', 'Sciences et technologies de l\'eau', '5');

-- --------------------------------------------------------

--
-- Structure de la table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
CREATE TABLE IF NOT EXISTS `subjects` (
  `IdSubject` int(11) NOT NULL AUTO_INCREMENT,
  `NameSubject` varchar(100) DEFAULT NULL,
  `CoefSubject` int(11) DEFAULT NULL,
  `IdUE` int(11) DEFAULT NULL,
  PRIMARY KEY (`IdSubject`),
  KEY `IdUE` (`IdUE`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `subjects`
--

INSERT INTO `subjects` (`IdSubject`, `NameSubject`, `CoefSubject`, `IdUE`) VALUES
(1, 'Algorithmmique', 8, 1),
(2, 'ACSI', 3, 1),
(3, 'Mathémathiques pour l\'informatique', 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `ues`
--

DROP TABLE IF EXISTS `ues`;
CREATE TABLE IF NOT EXISTS `ues` (
  `IdUE` int(11) NOT NULL AUTO_INCREMENT,
  `NameUE` varchar(100) DEFAULT NULL,
  `Section` varchar(5) DEFAULT NULL,
  `SemesterUE` int(11) NOT NULL,
  PRIMARY KEY (`IdUE`),
  KEY `Section` (`Section`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `ues`
--

INSERT INTO `ues` (`IdUE`, `NameUE`, `Section`, `SemesterUE`) VALUES
(1, 'Fondamentaux de l\'informatique', 'IG3', 1),
(2, 'Fondamentaux des mathématiques', 'IG3', 1),
(3, 'Gestion et communication ', 'IG3', 1),
(6, 'Techniques de l\'ingénieur', 'IG3', 1),
(7, 'Fondamentaux de l\'informatique 2', 'IG3', 2),
(8, 'Technique de l\'ingénieur 2', 'IG3', 2),
(9, 'Management', 'IG3', 2),
(10, 'Langues et communication', 'IG3', 2);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `EmailUser` varchar(100) NOT NULL,
  `NameUser` varchar(50) DEFAULT NULL,
  `SurnameUser` varchar(50) DEFAULT NULL,
  `Section` varchar(5) DEFAULT NULL,
  `Admin` varchar(5) DEFAULT NULL,
  `Password` varchar(200) DEFAULT NULL,
  `Created` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`EmailUser`),
  KEY `Section` (`Section`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`EmailUser`, `NameUser`, `SurnameUser`, `Section`, `Admin`, `Password`, `Created`) VALUES
('alexandre.girbal@etu.umontpellier.fr', 'Alexandre', 'GIRBAL', 'IG3', '0', '$2b$10$5SQk7trPPuPYfkkUX2b25uDB5WhSj.qH7..BpS9QucXexFQxw49bq', NULL),
('hugo.brando@etu.umontpellier.fr', 'Hugo', 'Brando', 'IG3', '0', '$2b$10$9xefBA00ZCwY7tL5ScMkduuA5L0.0pSysAC6Q49S/8rrhuc7iXB6G', NULL);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `marks`
--
ALTER TABLE `marks`
  ADD CONSTRAINT `marks_ibfk_1` FOREIGN KEY (`IdSubject`) REFERENCES `subjects` (`IdSubject`),
  ADD CONSTRAINT `marks_ibfk_2` FOREIGN KEY (`EmailUser`) REFERENCES `users` (`EmailUser`);

--
-- Contraintes pour la table `subjects`
--
ALTER TABLE `subjects`
  ADD CONSTRAINT `subjects_ibfk_1` FOREIGN KEY (`IdUE`) REFERENCES `ues` (`IdUE`);

--
-- Contraintes pour la table `ues`
--
ALTER TABLE `ues`
  ADD CONSTRAINT `ues_ibfk_1` FOREIGN KEY (`Section`) REFERENCES `sections` (`Section`);

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`Section`) REFERENCES `sections` (`Section`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
