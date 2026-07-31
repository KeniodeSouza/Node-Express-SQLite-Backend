DROP TABLE IF EXISTS "auth_perfil_permissoes";

CREATE TABLE IF NOT EXISTS "auth_perfil_permissoes" (
	id_perfil 				INTEGER NOT NULL,
	id_permissao 			INTEGER NOT NULL,
	descricao				TEXT NULL,
	PRIMARY KEY(id_perfil, id_permissao),
	FOREIGN KEY (id_perfil)
        REFERENCES "auth_perfil"(id)
        ON DELETE CASCADE,
	FOREIGN KEY (id_permissao)
        REFERENCES "auth_permissao"(id)
        ON DELETE CASCADE
);

INSERT INTO auth_perfil_permissoes (id_perfil,id_permissao,descricao) VALUES
	 (1,1,'Administrador');
