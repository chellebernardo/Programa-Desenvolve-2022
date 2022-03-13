/* Criando o DB*/

CREATE DATABASE IF NOT EXISTS sucos;

/*Criando tabela Cliente e Vendedores*/

CREATE TABLE tb_cliente (
CPF VARCHAR(11),
NOME VARCHAR(100),
ENDERECO1 VARCHAR(150),
ENDERECO2 VARCHAR(150),
BAIRRO VARCHAR(50),
CIDADE VARCHAR(50),
ESTADO VARCHAR(50),
CEP VARCHAR(8),
IDADE SMALLINT,
SEXO VARCHAR(1),
LIMITE_CREDITO FLOAT,
VOLUME_COMPRA FLOAT,
PRIMEIRA_COMPRA BIT(1)
);

CREATE TABLE tb_vendedores (
MATRICULA varchar(5),
NOME varchar(100),
PERCENTUAL_COMISSAO float,
DATA_ADMISSAO date,
DE_FERIAS bit);

USE sucos;

/*Insira os seguintes valores na tb_vendedores*/

INSERT INTO tb_vendedores (MATRICULA, NOME, DATA_ADMISSAO, PERCENTUAL_COMISSAO, DE_FERIAS)
VALUES
('00235','Márcio Almeida Silva','2014-08-15',0.08,0),
('00236','Cláudia Morais','2013-09-17',0.08,1),
('00237','Roberta Martins','2017-03-18',0.11,1),
('00238','Pericles Alves','2016-08-21',0.11,0);

/*Cláudia Morais (00236) recebeu aumento e sua comissão passou a ser de 11%. 
José Geraldo da Fonseca (00233) reclamou que seu nome real é José Geraldo da Fonseca Junior.*/

UPDATE tb_vendedores SET PERCENTUAL_COMISSAO = 0.11 WHERE MATRICULA = '00236';

UPDATE tb_vendedores SET NOME = 'José Geraldo da Fonseca Junior' WHERE MATRICULA = '00233';

/*O vendedor João Geraldo Fonseca Junior matrícula (00233) foi demitido. Retire-o da tabela de vendedores.*/

DELETE FROM tb_vendedores WHERE MATRICULA = '00233';

/*Adiciona a PK na tb_cliente*/
ALTER TABLE tb_vendedores ADD PRIMARY KEY (MATRICULA);

/*Incluindo novos campos na tabela*/
ALTER TABLE tb_cliente ADD COLUMN (DATA_NASCIMENTO DATE);

ALTER TABLE tb_vendedores ADD COLUMN (DATA_ADMISSAO DATE);
ALTER TABLE tb_vendedores ADD COLUMN (DE_FERIAS BIT(1));

UPDATE tb_vendedores SET DATA_ADMISSAO = '2014-08-15' WHERE MATRICULA = 00235;

/*Selecione nome e matrícula dos vendedores.*/

SELECT NOME, MATRICULA FROM tb_vendedores;

/*Verifique os dados cadastrais da vendedora Claudia Morais.*/

SELECT * FROM tb_vendedores WHERE NOME = 'Cláudia Morais';

/*Veja quais são os vendedores que possuem comissão maior que 10%.*/

SELECT * FROM tb_vendedores WHERE PERCENTUAL_COMISSAO > 0.10;

/* Veja quais são os vendedores que foram admitidos da empresa a partir de 2016. */

SELECT * FROM tb_vendedores WHERE YEAR (DATA_ADMISSAO) >= 2016;

/* Veja quais são os vendedores que estão de férias e que foram admitidos antes de 2016. */ 

SELECT * FROM tb_vendedores WHERE DE_FERIAS = 1 AND YEAR (DATA_ADMISSAO) <= 2016;
SELECT * FROM tb_vendedores WHERE YEAR (DATA_ADMISSAO) < 2016 AND DE_FERIAS = 1;



