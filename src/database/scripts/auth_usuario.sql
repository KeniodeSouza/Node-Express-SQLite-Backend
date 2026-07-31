DROP TABLE IF EXISTS "auth_usuario";

CREATE TABLE IF NOT EXISTS "auth_usuario" (
	id 						INTEGER PRIMARY KEY AUTOINCREMENT,
	email 					TEXT UNIQUE NOT NULL,
	nomeCompleto			TEXT NOT NULL,
	telefone				TEXT NOT NULL DEFAULT '(99) 99999-9999',
	senha 					TEXT NOT NULL DEFAULT 'Senha@123',
	data_criacao 			DATETIME DEFAULT CURRENT_TIMESTAMP,
	status 					TEXT NOT NULL DEFAULT 'ativo'
								CHECK (status IN ('ativo', 'inativo'))
);

INSERT INTO auth_usuario (email,nomeCompleto) VALUES
	 ('admin@gestao.com','Administrador');
