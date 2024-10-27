create database kiarnet;
use kiarnet;
-- debito automatico nos detalhes dos clientes
-- adicionar faturas posteriormente, por enquanto a logica não tem sentido
-- arrumar coisa de instalacao, cagarao meu esquema 
-- https://www.youtube.com/watch?v=C2-Yp7o17Lk
-- Cover mt bom recomendo

CREATE TABLE tb_cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nm_completo VARCHAR(255) NOT NULL,
    ds_celular VARCHAR(15) NOT NULL,
    ds_telefone VARCHAR(15),
    ds_email VARCHAR(255) NOT NULL,
    ds_cpf VARCHAR(14) NOT NULL,
    dt_nascimento DATE NOT NULL,
    ds_debito_automatico BOOLEAN,

    dt_adicao SYSDATE()
);

CREATE TABLE tb_faturas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    ds_email_fatura VARCHAR(255) NOT NULL,
    ds_tipo_residencia VARCHAR(10) NOT NULL,
    ds_dia_vencimento INT NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE tb_dados_bancarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    nm_banco VARCHAR(100) NOT NULL,
    ds_tipo_conta VARCHAR(50) NOT NULL,
    nr_agencia INT(4) NOT NULL,
    nr_conta VARCHAR(10) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
);

CREATE TABLE tb_endereco (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id int,
    bairro VARCHAR(100) NOT NULL,
    nm_rua VARCHAR(255) NOT NULL,
    nr_casa VARCHAR(10) NOT NULL,
    complemento VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE tb_tecnico(
    id INT auto_increment PRIMARY KEY,
    nm_tecnico VARCHAR(100) NOT NULL,
    dt_nascimento DATE NOT NULL,
    ds_cpf VARCHAR(14) NOT NULL
);

CREATE TABLE tb_instalacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    endereco_id INT,
    tecnico_id INT,
    dt_instalacao DATE NOT NULL,
    horario VARCHAR(10) NOT NULL,
    FOREIGN KEY (endereco_id) REFERENCES endereco(id),
    FOREIGN KEY (tecnico_id) REFERENCES tecnico(id)
);

