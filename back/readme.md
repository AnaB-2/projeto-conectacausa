

```sql
CREATE DATABASE conectacausa;

USE conectacausa;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(255),
    tipo_usuario VARCHAR(20),
    telefone VARCHAR(20),
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ongs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    nome_ong VARCHAR(100),
    cnpj VARCHAR(30),
    descricao VARCHAR(50),
    cidade VARCHAR(100),
    estado VARCHAR(50),
    foto VARCHAR(255),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(50)
);


CREATE TABLE doacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    doador_id INT,
    pedido_id INT,
    quantidade INT,
    mensagem VARCHAR(50),
    status VARCHAR(30),
    data_doacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (doador_id) REFERENCES usuarios(id),
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id)
);

INSERT INTO users ( name, email, senha, tipo_usuario, telefone, data_cadastro ) VALUES
( "ana", "ana@test.com", "ana123",),
( "rafa@gmail.cm", "234", "rafael");
```