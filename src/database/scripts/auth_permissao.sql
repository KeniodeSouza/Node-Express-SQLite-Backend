DROP TABLE IF EXISTS "auth_permissao";

CREATE TABLE IF NOT EXISTS "auth_permissao" (
	id 						INTEGER PRIMARY KEY AUTOINCREMENT,
	regra 					TEXT UNIQUE NOT NULL,
	descricao 				TEXT NULL,
	status 					TEXT NOT NULL DEFAULT 'ativo'
								CHECK (status IN ('ativo', 'inativo'))
);

INSERT INTO auth_permissao (regra,descricao) VALUES
	 ('admin:read','Permite acesso total ao Aplicativo'),
	 ('usuario:read','Permite listar/consultar usuário'),
	 ('usuario:create','Permite criar um novo usuário'),
	 ('usuario:update','Permite atualizar o usuário'),
	 ('usuario:change','Permite ativar/desativar o usuario'),
	 ('usuario:associate','Permite associar usuário a perfis'),
	 ('perfil:read','Permite listar/consultar perfil'),
	 ('perfil:create','Permite criar um novo perfil'),
	 ('perfil:update','Permite atualizar o perfil'),
	 ('perfil:change','Permite ativar/desativar o perfil'),
	 ('perfil:associate','Permite associar perfil a permissões'),
	 ('permissao:read','Permite listar/consultar permissão'),
	 ('permissao:create','Permite criar uma nova permissão'),
	 ('permissao:update','Permite atualizar a permissão'),
	 ('permissao:change','Permite ativar/desativar a permissão');
