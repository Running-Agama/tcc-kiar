create database kiarnett;
use kiarnett;
-- debito automatico nos detalhes dos usuarios
-- trocar usuario para clientes
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nm_completo VARCHAR(255) NOT NULL,
    celular VARCHAR(15) NOT NULL,
    telefone_opcional VARCHAR(15),
    email VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    dt_nascimento DATE NOT NULL,
    debito_automatico varchar(3)
);

CREATE TABLE faturas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id int,
    email_fatura VARCHAR(255) NOT NULL,
    tipo_residencia VARCHAR(100) NOT NULL,
    dia_fatura int NOT NULL,
    foreign key (usuario_id) references usuarios(id)
);

CREATE TABLE dados_bancarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id int,
    fatura_id int,
    nm_banco VARCHAR(100) NOT NULL,
    tipo_conta VARCHAR(50) NOT NULL,
    nr_agencia INT(4) NOT NULL,
    nr_conta VARCHAR(10) NOT NULL,
    foreign key (usuario_id) references usuarios(id),
    foreign key (fatura_id) references faturas(id)
);

CREATE TABLE endereco (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id int,
    bairro VARCHAR(100) NOT NULL,
    nm_rua VARCHAR(255) NOT NULL,
    nr_casa VARCHAR(10) NOT NULL,
    complemento VARCHAR(255),
    foreign key (usuario_id) references usuarios(id)
);

create table tecnico(
id int auto_increment primary key,
nm_tecnico varchar(100) not null,
dt_nascimento date not null,
cpf varchar(14) not null
);

CREATE TABLE instalacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    endereco_id int,
    tecnico_id int,
    dt_instalacao DATE NOT NULL,
    horario VARCHAR(10) NOT NULL,
    foreign key (endereco_id) references endereco(id),
    foreign key (tecnico_id) references tecnico(id)
);


insert into usuarios(
	nm_completo, 
	celular, 
	email, 
	telefone_opcional,
	cpf, 
	dt_nascimento
 )
values('nome completo', 1104212, 0, 'ccc@gmail.com', 11111, "1991-11-30");

insert into endereco(
	usuario_id,  
    bairro, 
    nm_rua, 
    nr_casa, 
    complemento
    )
values(1, 'Bairro', 'rua', 1, 'complemento');

insert into faturas(
usuario_id, 
email_fatura, 
tipo_residencia, dia_fatura)
values(1, 'email@email.com', 'casa', 2);

insert into dados_bancarios(
	usuario_id,
    fatura_id,
    nm_banco,
    tipo_conta,
    nr_agencia,
    nr_conta
)
values(1, 1,'Banco','Tipo',12,1222);

select * from usuarios