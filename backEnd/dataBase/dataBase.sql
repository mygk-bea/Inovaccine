CREATE DATABASE Inovaccine;
USE Inovaccine;

CREATE TABLE  Endereco (
    codEndereco INT AUTO_INCREMENT PRIMARY KEY,
    logradouro VARCHAR(100) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    numero VARCHAR(100) NOT NULL,
    complemento VARCHAR(100),
    cep CHAR(8) NOT NULL
)ENGINE=INNODB;

CREATE TABLE Paciente (
    codPaciente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    dataNasc DATE NOT NULL,
    cpf CHAR(11) NOT NULL,
    telefone CHAR(9) NOT NULL,
    fk_endereco_codEndereco INT,
    login VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(10) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    responsavel BOOLEAN NOT NULL,
    FOREIGN KEY (fk_endereco_codEndereco) REFERENCES Endereco(codEndereco)
)ENGINE=INNODB;

CREATE TABLE Dependente (
    codDependente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    fk_paciente_codPaciente INT,
    FOREIGN KEY (fk_paciente_codPaciente) REFERENCES Paciente(codPaciente)
)ENGINE=INNODB;

CREATE TABLE Vacina (
    codVacina INT AUTO_INCREMENT PRIMARY KEY,
    -- fk_lote_codLote INT,
    informacao VARCHAR(100),
    preco DECIMAL(10,2) NOT NULL,
    data DATE NOT NULL
    -- FOREIGN KEY (fk_lote_codLote) REFERENCES Lote(codLote)
)ENGINE=INNODB;

CREATE TABLE Carteira (
    codCarteira INT AUTO_INCREMENT PRIMARY KEY,
    dose VARCHAR(100) NOT NULL,
    fk_vacina_codVacina INT,
    fk_clinica_codClinica INT,
    FOREIGN KEY (fk_vacina_codVacina) REFERENCES Vacina(codVacina),
    FOREIGN KEY (fk_clinica_codClinica) REFERENCES Clinica(codClinica)
)ENGINE=INNODB;

CREATE TABLE DiskDenuncia (
    codDenuncia INT AUTO_INCREMENT PRIMARY KEY,
    anonimo BOOLEAN,
    nome VARCHAR(100) NOT NULL,
    fk_endereco_codEndereco INT,
    observacao VARCHAR(100) NOT NULL,
    FOREIGN KEY (fk_endereco_codEndereco) REFERENCES Endereco(codEndereco)
)ENGINE=INNODB;

CREATE TABLE Agendamento (
    codAgendamento INT AUTO_INCREMENT PRIMARY KEY,
    valor DECIMAL(10,2) NOT NULL,
    fk_vacina_codVacina INT,
    fk_paciente_codPaciente INT,
    fk_clinica_codClinica INT,
    dataHora DATETIME NOT NULL,
    comparecimento BOOLEAN,
    FOREIGN KEY (fk_vacina_codVacina) REFERENCES Vacina(codVacina),
    FOREIGN KEY (fk_paciente_codPaciente) REFERENCES Paciente(codPaciente),
    FOREIGN KEY (fk_clinica_codClinica) REFERENCES Clinica(codClinica)
)ENGINE=INNODB;

CREATE TABLE Campanha (
    codCampanha INT AUTO_INCREMENT PRIMARY KEY,
    fk_vacina_codVacina INT,
    dataInicio DATETIME NOT NULL,
    dataFim DATETIME NOT NULL,
    FOREIGN KEY (fk_vacina_codVacina) REFERENCES Vacina(codVacina)
)ENGINE=INNODB;

CREATE TABLE RelacaoAgendamento (
    fk_paciente_codPaciente INT,
    fk_vacina_codVacina INT,
    nome VARCHAR(100) NOT NULL,
    FOREIGN KEY (fk_vacina_codVacina) REFERENCES Vacina(codVacina),
    FOREIGN KEY (fk_paciente_codPaciente) REFERENCES Paciente(codPaciente),
    PRIMARY KEY (fk_paciente_codPaciente, fk_vacina_codVacina)
)ENGINE=INNODB;

-- MINHA PARTE

CREATE TABLE Fornecedor(
    nome VARCHAR(100) NOT NULL,
    telefone CHAR(9) NOT NULL,
    cnpj CHAR(14) NOT NULL,
    codFornecedor INT AUTO_INCREMENT PRIMARY KEY
)ENGINE=INNODB;

CREATE TABLE Lote (
    valor DECIMAL(10,2) NOT NULL,
    vacina VARCHAR(100) NOT NULL,
    codLote INT AUTO_INCREMENT PRIMARY KEY,
    data_compra DATE NOT NULL,
    fk_fornecedor_codFornecedor INT NOT NULL,
    -- comporvante VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY (fk_fornecedor_codFornecedor) REFERENCES Fornecedor(codFornecedor)
)ENGINE=INNODB;

CREATE TABLE Funcionario (
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) NOT NULL,
    codFuncionario INT AUTO_INCREMENT PRIMARY KEY,
    telefone CHAR(9) NOT NULL,
    fk_funcionario_codLogin INT NOT NULL,
    FOREIGN KEY (fk_funcionario_codLogin) REFERENCES Usuario(codLogin)
)ENGINE=INNODB;

CREATE TABLE RelacaoDocumento (
    fk_funcionario_codFuncionario INT NOT NULL,
    fk_documento_codDocumento INT NOT NULL,
    codEmissao INT AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY (fk_funcionario_codFuncionario) REFERENCES Funcionario(codFuncionario),
    FOREIGN KEY (fk_documento_codDocumento) REFERENCES Documento(codDocumento)
)ENGINE=INNODB;

CREATE TABLE Documento (
    tipo VARCHAR(100) NOT NULL,
    arquivo VARCHAR(100) NOT NULL,
    codDocumento INT AUTO_INCREMENT PRIMARY KEY
)ENGINE=INNODB;

CREATE TABLE Clinica (
    nome VARCHAR(100) NOT NULL,
    cnpj CHAR(14) NOT NULL,
    codClinica INT AUTO_INCREMENT PRIMARY KEY,
    fk_clinica_codEndereco INT,
    telefone CHAR(9) NOT NULL,
    fk_clinica_codLogin INT NOT NULL,
    periodo_funcionamento DATETIME NOT NULL,
    fk_clinica_codMedico INT NOT NULL,
    FOREIGN KEY (fk_clinica_codEndereco) REFERENCES Endereco(codEndereco),
    FOREIGN KEY (fk_clinica_codLogin) REFERENCES Usuario(codLogin),
    FOREIGN KEY (fk_clinica_codMedico) REFERENCES Medico(codMedico)
)ENGINE=INNODB;

CREATE TABLE Medico (
    nome VARCHAR(100) NOT NULL,
    
    cpf CHAR(11) NOT NULL,
    crm CHAR(9) NOT NULL,
    telefone CHAR(11) NOT NULL,
    codMedico INT AUTO_INCREMENT PRIMARY KEY,
    fk_medico_codLogin INT NOT NULL,
    FOREIGN KEY (fk_medico_codClinica) REFERENCES Clinica(codClinica),
    FOREIGN KEY (fk_medico_codLogin) REFERENCES Usuario(codLogin)
)ENGINE=INNODB;

CREATE TABLE Usuario (
    tipo VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha CHAR(10) NOT NULL,
    codLogin INT AUTO_INCREMENT PRIMARY KEY
)ENGINE=INNODB;

CREATE TABLE RelacaoVacina (
    fk_vacina_codVacina INT NOT NULL,
    fk_clinica_codClinica INT NOT NULL,
    FOREIGN KEY (fk_vacina_codVacina) REFERENCES Vacina(codVacina),
    FOREIGN KEY (fk_clinica_codClinica) REFERENCES Clinica(codClinica)
)ENGINE=INNODB;
