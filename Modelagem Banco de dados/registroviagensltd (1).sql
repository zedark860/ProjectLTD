-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26/05/2024 às 09:56
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `registroviagensltd`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `chegada_destino`
--

CREATE TABLE `chegada_destino` (
  `id_viagem` int(11) NOT NULL,
  `refeicao_tipo` varchar(255) DEFAULT NULL,
  `refeicao_inicio` time DEFAULT NULL,
  `refeicao_fim` time DEFAULT NULL,
  `tempo_espera_tipo` varchar(255) DEFAULT NULL,
  `tempo_espera_inicio` time DEFAULT NULL,
  `tempo_espera_fim` time DEFAULT NULL,
  `retorno` date DEFAULT NULL,
  `hora` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `chegada_destino`
--

INSERT INTO `chegada_destino` (`id_viagem`, `refeicao_tipo`, `refeicao_inicio`, `refeicao_fim`, `tempo_espera_tipo`, `tempo_espera_inicio`, `tempo_espera_fim`, `retorno`, `hora`) VALUES
(1, '', '04:47:00', '04:47:00', '', '04:47:00', '04:47:00', '0000-00-00', '04:47:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `diario_de_borda`
--

CREATE TABLE `diario_de_borda` (
  `id_diario` int(11) NOT NULL,
  `id_viagem` int(11) DEFAULT NULL,
  `data_viagem` date DEFAULT NULL,
  `inicio` time DEFAULT NULL,
  `motorista` varchar(255) DEFAULT NULL,
  `deposito` varchar(255) DEFAULT NULL,
  `fabrica` varchar(255) DEFAULT NULL,
  `cavalo` varchar(255) DEFAULT NULL,
  `carreta` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `diario_de_borda`
--

INSERT INTO `diario_de_borda` (`id_diario`, `id_viagem`, `data_viagem`, `inicio`, `motorista`, `deposito`, `fabrica`, `cavalo`, `carreta`) VALUES
(1, 1, '2024-05-26', '04:47:00', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Estrutura para tabela `parada_ida`
--

CREATE TABLE `parada_ida` (
  `id_parada_ida` int(11) NOT NULL,
  `id_viagem` int(11) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `inicio` time DEFAULT NULL,
  `fim` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `parada_ida`
--

INSERT INTO `parada_ida` (`id_parada_ida`, `id_viagem`, `tipo`, `inicio`, `fim`) VALUES
(1, 1, '', '04:47:00', '04:47:00'),
(2, 1, '', '04:47:00', '04:47:00'),
(3, 1, '', '04:47:00', '04:47:00'),
(4, 1, '', '04:47:00', '04:47:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `parada_volta`
--

CREATE TABLE `parada_volta` (
  `id_parada_volta` int(11) NOT NULL,
  `id_viagem` int(11) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `inicio` time DEFAULT NULL,
  `fim` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `parada_volta`
--

INSERT INTO `parada_volta` (`id_parada_volta`, `id_viagem`, `tipo`, `inicio`, `fim`) VALUES
(1, 1, '', '04:47:00', '04:48:00'),
(2, 1, '', '04:47:00', '04:48:00'),
(3, 1, '', '04:47:00', '04:48:00'),
(4, 1, '', '04:48:00', '04:48:00');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `chegada_destino`
--
ALTER TABLE `chegada_destino`
  ADD PRIMARY KEY (`id_viagem`);

--
-- Índices de tabela `diario_de_borda`
--
ALTER TABLE `diario_de_borda`
  ADD PRIMARY KEY (`id_diario`),
  ADD KEY `id_viagem` (`id_viagem`);

--
-- Índices de tabela `parada_ida`
--
ALTER TABLE `parada_ida`
  ADD PRIMARY KEY (`id_parada_ida`),
  ADD KEY `id_viagem` (`id_viagem`);

--
-- Índices de tabela `parada_volta`
--
ALTER TABLE `parada_volta`
  ADD PRIMARY KEY (`id_parada_volta`),
  ADD KEY `id_viagem` (`id_viagem`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `diario_de_borda`
--
ALTER TABLE `diario_de_borda`
  MODIFY `id_diario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `parada_ida`
--
ALTER TABLE `parada_ida`
  MODIFY `id_parada_ida` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `parada_volta`
--
ALTER TABLE `parada_volta`
  MODIFY `id_parada_volta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `diario_de_borda`
--
ALTER TABLE `diario_de_borda`
  ADD CONSTRAINT `diario_de_borda_ibfk_1` FOREIGN KEY (`id_viagem`) REFERENCES `chegada_destino` (`id_viagem`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `parada_ida`
--
ALTER TABLE `parada_ida`
  ADD CONSTRAINT `parada_ida_ibfk_1` FOREIGN KEY (`id_viagem`) REFERENCES `chegada_destino` (`id_viagem`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `parada_volta`
--
ALTER TABLE `parada_volta`
  ADD CONSTRAINT `parada_volta_ibfk_1` FOREIGN KEY (`id_viagem`) REFERENCES `chegada_destino` (`id_viagem`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
