DROP TABLE IF EXISTS "auth_perfil";

CREATE TABLE IF NOT EXISTS "auth_perfil" (
	id 						INTEGER PRIMARY KEY AUTOINCREMENT,
	nome 					TEXT UNIQUE NOT NULL,
	descricao 				TEXT NOT NULL,
	data_criacao 			DATETIME DEFAULT CURRENT_TIMESTAMP,
	status 					TEXT NOT NULL DEFAULT 'ativo'
								CHECK (status IN ('ativo', 'inativo'))
);

INSERT INTO auth_perfil (nome,descricao) VALUES
	 ('ADMINISTRADOR','Acesso total ao sistema');
