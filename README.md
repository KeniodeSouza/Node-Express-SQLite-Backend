<div align="center">

# Aplicação Node.js + Express + SQLite para teste de API
<!-- Badge Principais -->
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2018.0.0-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Nodemon Version](https://img.shields.io/badge/nodemon-%3E%3D%203.0.0-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)](https://nodemon.io/)
<!-- Badge do Secundarios -->
[![SQLite Version](https://img.shields.io/badge/sqlite-%3E%3D%203.0.0-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![bcrypt Version](https://img.shields.io/badge/bcrypt-%3E%3D%205.0.0-3178C6?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/bcrypt)
<!-- Badge do Secundarios -->
[![Git Version](https://img.shields.io/badge/git-%3E%3D%202.0.0-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![Docker Version](https://img.shields.io/badge/docker-%3E%3D%2020.10.0-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Mailpit](https://img.shields.io/badge/mailpit-latest-000000?style=for-the-badge&logo=mailpit&logoColor=white)](https://mailpit.axllent.org/)

</div>

## Sobre o Projeto

Este projeto é uma API RESTful desenvolvida utilizando **Node.js**, **Express** e **SQLite**. Ele implementa a arquitetura em camadas 
(**Routes**, **Services**, **Repositories**) para garatir separação de responsabilidades, boa manutenibilidade e facilidade de testes.

## Funcionalidades

- [x] Arquitetura modularizada (Routes, Services e Repositories).
- [x] Operações completas de CRUD (Create, Read, Update, Delete).
- [x] Tratamento centralizado de erros assíncronos.
- [x] Conexão e manipulação do banco de dados relacional SQLite3.

---

## Instalação, configuração e Execução

### Pré-requisitos

Antes de começar, é necessário ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (Versão 18 ou superior)
- [SQLite3](https://www.sqlite.org/)
- [Git](https://git-scm.com/)
- [Docker](https://docs.docker.com/get-started/get-docker/)

### Instalação do aplicativo, via GITHUB

```bash
# Clone este repositório
$ git clone https://github.com/KeniodeSouza/Node-Express-SQLite-Backend.git

# Acesse a pasta do projeto
$ cd Node-Express-SQLite-Backend

# Instale as dependências
$ npm install
```

### Estrutura de diretórios

```text
Node-Express-Sqlite-Backend/
 ├── src/
 │   ├── config/
 │   │   └── database.js
 │   ├── database/
 │   │   └── base.db
 │   ├── models/
 │   │   ├── api.model.js
 │   │   ├── auth.model.js
 │   │   └── usuario.model.js
 │   ├── repositories/
 │   │   ├── perfil.repository.js
 │   │   ├── perfilPermissoes.repository.js
 │   │   ├── permissao.repository.js
 │   │   ├── usuario.repository.js
 │   │   └── usuarioPerfis.repository.js
 │   ├── routes/
 │   │   ├── auth.routes.js
 │   │   ├── perfil.routes.js
 │   │   ├── permissao.routes.js
 │   │   ├── reports.routes.js
 │   │   └── usuario.routes.js
 │   ├── services/
 │   │   ├── auth.service.js
 │   │   ├── perfil.service.js
 │   │   ├── permissao.service.js
 │   │   ├── reports.service.js
 │   │   └── usuario.service.js
 │   ├── utils/
 │   │   ├── appError.js
 │   │   └── token.js
 │   └── app.js
 ├── .env
 ├── .gitignore
 ├── package.json
 └── README.md
```

---

### ️Configuração do servidor

1. Variaveis de ambiente (.env)

```text
PORT=3000

EMAIL_HOST=localhost
EMAIL_PORT=1025
EMAIL_USER=smtp@localhost
EMAIL_PASS=
```

2.- Tabelas do SQLite (base.db)

A maioria das tabelas estaram vazias, sendo que o Administrador e Permissão estaram populadas.

- Usuario:
```text
------------------------------------------------------------------------------------------------
id|email               |nomeCompleto      |telefone       |senha    |data_criacao       |status|
--+--------------------+------------------+---------------+---------+-------------------+------+
 1|admin@gestao.com    |Administrador     |(99) 99999-9999|Senha@125|2026-07-25 11:53:40|ativo |
------------------------------------------------------------------------------------------------
```

- Perfil:
```text
------------------------------------------------------------------------------------------------
id|nome             |descricao                                      |data_criacao       |status|
--+-----------------+-----------------------------------------------+-------------------+------+
 1|ADMINISTRADOR    |Acesso total ao sistema                        |2026-07-25 11:54:10|ativo |
------------------------------------------------------------------------------------------------
```

- Permissão:
```text
-------------------------------------------------------------------------
id|regra                |descricao                               |status|
--+---------------------+----------------------------------------+------+
 1|admin:read           |Permite acesso total ao Aplicativo      |ativo |
 2|usuario:read         |Permite listar/consultar usuário        |ativo |
 3|usuario:create       |Permite criar um novo usuário           |ativo |
 4|usuario:update       |Permite atualizar o usuário             |ativo |
 5|usuario:change       |Permite ativar/desativar o usuário      |ativo |
 6|usuario:associate    |Permite associar o usuário aos perfis   |ativo |
 7|perfil:read          |Permite listar/consultar perfil         |ativo |
 8|perfil:create        |Permite criar um novo perfil            |ativo |
 9|perfil:update        |Permite atualizar o perfil              |ativo |
10|perfil:change        |Permite ativar/desativar o perfil       |ativo |
11|perfil:associate     |Permite associar o Perfil as permissões |ativo |
12|permissao:read       |Permite listar/consultar permissão      |ativo |
13|permissao:create     |Permite criar uma nova permissão        |ativo |
14|permissao:update     |Permite atualizar a permissão           |ativo |
15|permissao:change     |Permite ativar/desativar o permissão    |ativo |
-------------------------------------------------------------------------
```

---

### Execução da Aplicação Backend

No diretório Node-Express-SQLite-Backend:
- **npm start**
- Alternativamente com nodemon: **npm run dev**
