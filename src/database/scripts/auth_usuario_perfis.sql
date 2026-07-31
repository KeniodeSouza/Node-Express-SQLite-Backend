DROP TABLE IF EXISTS "auth_usuario_perfis";

CREATE TABLE IF NOT EXISTS "auth_usuario_perfis" (
	id_usuario 				INTEGER NOT NULL,
	id_perfil 				INTEGER NOT NULL,
	descricao				TEXT NULL,
	PRIMARY KEY(id_usuario, id_perfil),
	FOREIGN KEY (id_usuario)
        REFERENCES "auth_usuario"(id)
        ON DELETE CASCADE,
	FOREIGN KEY (id_perfil)
        REFERENCES "auth_perfil"(id)
        ON DELETE CASCADE
);


INSERT INTO auth_usuario_perfis (id_usuario,id_perfil,descricao) VALUES
	 (1,1,'administrador');
