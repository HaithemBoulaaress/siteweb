-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 26 mai 2019 à 22:00
-- Version du serveur :  5.7.19
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `bdtest`
--

-- --------------------------------------------------------

--
-- Structure de la table `rapport`
--

DROP TABLE IF EXISTS `rapport`;
CREATE TABLE IF NOT EXISTS `rapport` (
  `Num_bulltein` varchar(255) NOT NULL,
  `Num_folio` varchar(255) NOT NULL,
  `Noms_constatation` varchar(255) NOT NULL,
  `Date_constatation` varchar(255) NOT NULL,
  `Foret_canto` varchar(255) NOT NULL,
  `Age_bois` varchar(255) NOT NULL,
  `Nature_delit` varchar(255) NOT NULL,
  `Nature_dommage` varchar(255) NOT NULL,
  `Nature_objects` varchar(255) NOT NULL,
  `Nom_delinquant` varchar(255) NOT NULL,
  `Situation_fortune` varchar(255) NOT NULL,
  `Saisies_sequestre` varchar(255) NOT NULL,
  `Charge_famille` varchar(255) NOT NULL,
  `Amendes` varchar(255) NOT NULL,
  `Dommages` varchar(255) NOT NULL,
  `Restitution` varchar(255) NOT NULL,
  `Frais` varchar(255) NOT NULL,
  `carnet` varchar(255) NOT NULL,
  `Num_recu` varchar(255) NOT NULL,
  `folio` varchar(255) NOT NULL,
  `Date_delivrance` varchar(255) NOT NULL,
  `Signature_proposes` varchar(255) NOT NULL,
  `id_rapport` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_rapport`),
  UNIQUE KEY `Num_bulltein` (`Num_bulltein`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `rapport`
--

INSERT INTO `rapport` (`Num_bulltein`, `Num_folio`, `Noms_constatation`, `Date_constatation`, `Foret_canto`, `Age_bois`, `Nature_delit`, `Nature_dommage`, `Nature_objects`, `Nom_delinquant`, `Situation_fortune`, `Saisies_sequestre`, `Charge_famille`, `Amendes`, `Dommages`, `Restitution`, `Frais`, `carnet`, `Num_recu`, `folio`, `Date_delivrance`, `Signature_proposes`, `id_rapport`) VALUES
('mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 'mahdher', 1),
('111', '111111', '111', '111', '111', '111', '111', '111', '111', '111', '111', '111', '111', '111', '111', '111', '111', '111', '111', '111', '111', '111', 2),
('aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 3);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `pass` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `username` (`user`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`uid`, `user`, `nom`, `prenom`, `pass`, `email`) VALUES
(12, 'Ø§Ù„Ø§Ø¯Ø§Ø±Ø© Ø§Ù„Ø¹Ø§Ù…Ø© Ø§Ù„ØºØ§Ø¨Ø§Øª', 'mahdher', 'Haithem', 'e10adc3949ba59abbe56e057f20f883e', 'Haithem.mahdher@gmail.com'),
(13, 'Ø¯Ø§Ø¦Ø±Ø© Ø§Ù„ØºØ§Ø¨Ø§Øª', 'mahdher', 'Mohamed', 'c84258e9c39059a89ab77d846ddab909', 'admin2@gmail.com'),
(14, 'Ø§Ù„Ù…Ø±Ø§ÙƒØ² Ø§Ù„ØºØ§Ø¨ÙŠØ©', 'mahdher', 'test', 'fc1ebc848e31e0a68e868432225e3c82', 'admin4@gmail.com'),
(15, 'Ø§Ù„Ø¯ÙˆØ§Ø¦Ø± Ø§Ù„ÙØ±Ø¹ÙŠØ©', 'mahdher', 'youssef', '32cacb2f994f6b42183a1300d9a3e8d6', 'admin3@gmail.com'),
(16, 'Ù…ÙˆØ§Ø·Ù†', 'mahdher', 'mahdher', '8e1d4bf5d95aeee150b7b13359936293', 'mahdher@gmail.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
