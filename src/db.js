const sqlite3 = require('sqlite3').verbose();

module.exports = function iniciarBaseDados() {
  try {
    const database = new sqlite3.Database(`./BaseDados.db`);
    const initDatabase = `
CREATE TABLE IF NOT EXISTS colaborador (
    id integer primary key NOT NULL UNIQUE,
    nome TEXT NOT NULL,
    idade TEXT NOT NULL,
    regime_contratacao TEXT NOT NULL,
    tipo TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS projeto (
    id integer primary key NOT NULL UNIQUE,
    nome TEXT NOT NULL,
    prazo INTEGER NOT NULL,
    status TEXT NOT NULL,
    descricao TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS area_atuacao (
    id integer primary key NOT NULL UNIQUE,
    nome TEXT NOT NULL,
    descricao TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS tipo_tecnologia (
    id integer primary key NOT NULL UNIQUE,
    nome TEXT NOT NULL,
    descricao TEXT
);

CREATE TABLE IF NOT EXISTS tecnologia (
    id integer primary key NOT NULL UNIQUE,
    nome TEXT NOT NULL,
    descricao TEXT NOT NULL,
    tipo_tecnologia_id INTEGER NOT NULL,
    FOREIGN KEY(tipo_tecnologia_id) REFERENCES tipo_tecnologia(id)
);

-- Tabela de Junção N:M (Colaborador <-> AreaAtuacao)
CREATE TABLE IF NOT EXISTS area_atuacao_colaborador (
    colaborador_id INTEGER NOT NULL,
    atuacao_id INTEGER NOT NULL,
    PRIMARY KEY(colaborador_id, atuacao_id),
    FOREIGN KEY(colaborador_id) REFERENCES colaborador(id),
    FOREIGN KEY(atuacao_id) REFERENCES area_atuacao(id)
);

-- Tabela de Junção N:M (Projeto <-> Colaborador)
CREATE TABLE IF NOT EXISTS projeto_colaborador (
    projeto_id INTEGER NOT NULL,
    colaborador_id INTEGER NOT NULL,
    PRIMARY KEY(projeto_id, colaborador_id),
    FOREIGN KEY(projeto_id) REFERENCES projeto(id),
    FOREIGN KEY(colaborador_id) REFERENCES colaborador(id)
);

-- Tabela de Junção N:M (Projeto <-> Tecnologia)
CREATE TABLE IF NOT EXISTS projeto_tecnologia (
    projeto_id INTEGER NOT NULL,
    tecnologia_id INTEGER NOT NULL,
    PRIMARY KEY(projeto_id, tecnologia_id),
    FOREIGN KEY(projeto_id) REFERENCES projeto(id),
    FOREIGN KEY(tecnologia_id) REFERENCES tecnologia(id)
);
`;
    database.exec(initDatabase);
    console.log('Banco de dados inicializado.');
  } catch (error) {
    console.log(error);
  }
}

