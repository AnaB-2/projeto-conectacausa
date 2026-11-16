-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: dbmaria
-- Tempo de geração: 15/11/2026 às 22:14
-- Versão do servidor: 11.7.2-MariaDB-ubu2404
-- Versão do PHP: 8.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `conectacausa`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nome_categoria` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `categorias`
--

INSERT INTO `categorias` (`id`, `nome_categoria`) VALUES
(1, 'Cuidado aos Animais');

-- --------------------------------------------------------

--
-- Estrutura para tabela `categoriausuario`
--

CREATE TABLE `categoriausuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `ativo` tinyint(1) DEFAULT 1,
  `data_criacao` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `categoriausuario`
--

INSERT INTO `categoriausuario` (`id`, `nome`, `descricao`, `ativo`, `data_criacao`) VALUES
(1, 'user', 'usuario normal', 1, '2026-06-12 01:48:43');

-- --------------------------------------------------------

--
-- Estrutura para tabela `doacoes`
--

CREATE TABLE `doacoes` (
  `id` int(11) NOT NULL,
  `doador_id` int(11) DEFAULT NULL,
  `ong_id` int(11) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `mensagem` varchar(50) DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL,
  `data_doacao` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `doacoes`
--

INSERT INTO `doacoes` (`id`, `doador_id`, `ong_id`, `quantidade`, `mensagem`, `status`, `data_doacao`) VALUES
(1, NULL, NULL, 3, 'toma', NULL, '2026-06-12 01:46:40');

-- --------------------------------------------------------

--
-- Estrutura para tabela `ongs`
--

CREATE TABLE `ongs` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `catOng` int(11) DEFAULT NULL,
  `nome_ong` varchar(100) DEFAULT NULL,
  `cnpj` varchar(30) DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `cidade` varchar(100) DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `ongs`
--

INSERT INTO `ongs` (`id`, `usuario_id`, `catOng`, `nome_ong`, `cnpj`, `descricao`, `cidade`, `estado`, `foto`) VALUES
(1, NULL, NULL, 'conectacausa', '2123131223112', 'ong para ajudar ongs', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `tipo_usuario` int(11) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `nome`, `email`, `senha`, `tipo_usuario`, `telefone`, `data_cadastro`) VALUES
(1, 'carlos', 'carlose@gmail.cm', '', NULL, NULL, '2026-06-12 01:41:28'),
(2, 'teste local', 'teste@gmail.com', 'teste@123', NULL, '16 9.9999-9999', '2026-11-15 15:58:22');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `categoriausuario`
--
ALTER TABLE `categoriausuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nome` (`nome`);

--
-- Índices de tabela `doacoes`
--
ALTER TABLE `doacoes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `doador_id` (`doador_id`),
  ADD KEY `ong_id` (`ong_id`);

--
-- Índices de tabela `ongs`
--
ALTER TABLE `ongs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `catOng` (`catOng`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `tipo_usuario` (`tipo_usuario`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `categoriausuario`
--
ALTER TABLE `categoriausuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `doacoes`
--
ALTER TABLE `doacoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `ongs`
--
ALTER TABLE `ongs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `doacoes`
--
ALTER TABLE `doacoes`
  ADD CONSTRAINT `doacoes_ibfk_1` FOREIGN KEY (`doador_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `doacoes_ibfk_2` FOREIGN KEY (`ong_id`) REFERENCES `ongs` (`id`);

--
-- Restrições para tabelas `ongs`
--
ALTER TABLE `ongs`
  ADD CONSTRAINT `ongs_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `ongs_ibfk_2` FOREIGN KEY (`catOng`) REFERENCES `categorias` (`id`);

--
-- Restrições para tabelas `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`tipo_usuario`) REFERENCES `categoriausuario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
