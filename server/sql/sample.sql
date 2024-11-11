
create database kiarnet;
use kiarnet;

CREATE TABLE tb_cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    ds_nome VARCHAR(255) NOT NULL,
    ds_celular VARCHAR(15) NOT NULL,
    ds_telefone VARCHAR(15),
    ds_email VARCHAR(255) NOT NULL,
    ds_cpf VARCHAR(14) NOT NULL,
    dt_nascimento DATE NOT NULL,
    ds_debito_automatico BOOLEAN,
    dt_adicao DATE
);

CREATE TABLE tb_faturas (
    id INT AUTO_INCREMENT PRIMARY KEY,
	id_cliente INT,
    ds_plano VARCHAR(20),
    ds_email_fatura VARCHAR(255) NOT NULL,
    ds_tipo_residencia VARCHAR(11) NOT NULL,
    ds_dia_vencimento INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente) ON DELETE CASCADE
);

CREATE TABLE tb_dados_bancarios (
    id_cliente INT PRIMARY KEY,
    nm_banco VARCHAR(100) NOT NULL,
    ds_tipo_conta VARCHAR(50) NOT NULL,
    nr_agencia INT(4) NOT NULL,
    nr_conta VARCHAR(10) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente) ON DELETE CASCADE
);

CREATE TABLE tb_endereco (
    id_cliente INT PRIMARY KEY,
    ds_cep VARCHAR(50) NOT NULL,
    ds_bairro VARCHAR(100) NOT NULL,
    nm_rua VARCHAR(255) NOT NULL,
    nr_casa VARCHAR(10) NOT NULL,
    ds_complemento VARCHAR(255),
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente) ON DELETE CASCADE
);

CREATE TABLE tb_tecnico(
    id INT auto_increment PRIMARY KEY,
    nm_tecnico VARCHAR(100) NOT NULL,
    dt_nascimento DATE NOT NULL,
    ds_cpf VARCHAR(14) NOT NULL
);

CREATE TABLE tb_instalacao (
	id_cliente INT PRIMARY KEY,
    dt_primeira_opcao DATE NOT NULL,
    dt_segunda_opcao DATE,
    ds_instalacao ENUM('Pendente', 'Concluida'),
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente) ON DELETE CASCADE
);


select * from tb_cliente;
select * from tb_endereco;
select * from tb_faturas;

select * from tb_cliente;
select * from tb_endereco;


select id_cliente, dt_adicao, ds_plano, nm_rua, nr_casa, ds_bairro
FROM tb_cliente
JOIN tb_endereco USING(id_cliente)
JOIN tb_faturas USING (id_cliente);

select ds_nome, ds_cep, ds_cpf from tb_cliente
join tb_endereco using(id_cliente)
