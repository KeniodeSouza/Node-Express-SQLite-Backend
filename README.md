<div align="center">

# 🚀 Node.js + Express + SQLite API

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2018.0.0-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![SQLite3](https://img.shields.io/badge/sqlite-3.x-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

### 📌 Atalhos Rápidos
[Sobre o Projeto](#-sobre-o-projeto) •
[Funcionalidades](#-funcionalidades) •
[Tecnologias](#-tecnologias-utilizadas) •
[Instalação e Execução](#-instalação-e-execução) •
[Endpoints da API](#-endpoints-da-api) •
[Referências](#-referências)

---

</div>

## 📖 Sobre o Projeto

Este projeto é uma API RESTful desenvolvida utilizando **Node.js**, **Express** e **SQLite**. Ele implementa a arquitetura em camadas 
(**Routes**, **Services**, **Repositories**) para garatir separação de responsabilidades, boa manutenibilidade e facilidade de testes.

### 🖼️ Demonstração

| Testando no Postman / Insomnia | Estrutura do Banco de Dados |
| :---: | :---: |
| <img src="https://via.placeholder.com/400x250?text=Exemplo+Insomnia+API" alt="Exemplo Insomnia" width="400"/> | <img src="https://via.placeholder.com/400x250?text=Exemplo+SQLite+Studio" alt="Exemplo SQLite" width="400"/> |

---

## ✨ Funcionalidades

- [x] Arquitetura modularizada (Routes, Services e Repositories).
- [x] Operações completas de CRUD (Create, Read, Update, Delete).
- [x] Tratamento centralizado de erros assíncronos.
- [x] Conexão e manipulação do banco de dados relacional SQLite3.

---

## 🛠️ Tecnologias Utilizadas

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework Web:** [Express.js](https://expressjs.com/)
- **Banco de Dados:** [SQLite3](https://www.sqlite.org/) (driver `sqlite` / `sqlite3`)
- **Organização de Código:** CommonJS (`require`)

---

## 🚀 Instalação e Execução

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (Versão 18 ou superior)
- [SQLite3](https://www.sqlite.org/)
- [Git](https://git-scm.com/)

### Via GITHUB

```bash
# Clone este repositório
$ git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/KeniodeSouza/Node-Express-Backend.git)

# Acesse a pasta do projeto
$ cd Node-Express-SQLite-Backend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev # ou npm start# Servidor Backend com Node.js + Express + SQLite para teste, via API
```

## Criar projeto Node
```bash
mkdir Node-Express-SQLite-Backend

cd Node-Express-SQLite-Backend

npm init -y

npm install express cors dotenv body-parser jsonwebtoken nodemailer 

npm install sqlite3 sqlite bcrypt

npm install nodemon --save-dev

```
---

## Customizar o instalação (package.json)
```json
{
 "name": "node-express-sqlite-backend",
 "version": "1.0.0",
 "description": "Servidor teste para API (Com banco de dados)",
 "main": "src/app.js",
 "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
 },
 "keywords": [],
 "author": "",
 "license": "ISC",
 "type": "commonjs",
 "dependencies": {
    "bcrypt": "^6.0.0",
    "body-parser": "^2.3.0",
    "cors": "^2.8.6",
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "nodemailer": "^9.0.3",
    "sqlite": "^5.1.1",
    "sqlite3": "^6.0.1"
 },
 "devDependencies": {
    "nodemon": "^3.0.1"
 }
}

```
---

## Estrutura de pastas
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

## 🛠️Configuração do servidor SMTP


### **servidor SMTP de teste local**.

A ferramenta mais famosa e fácil para isso é o **Mailpit** (o sucessor moderno do antigo *MailHog*). 
Ele roda um servidor SMTP local que captura todos os e-mails enviados pelo Nodemailer e disponibiliza 
uma interface web bonita para você visualizá-los.

---

### Como rodar o Mailpit (Servidor SMTP Local)

Você pode rodar o Mailpit de duas formas: usando **Docker** (recomendado) ou baixando o arquivo executável.

#### Opção A: Com Docker (Mais rápida)

Se você tem o Docker instalado, basta rodar este comando no seu terminal:

```bash
docker run -d --name mailpit -p 1025:1025 -p 8025:8025 axllent/mailpit

```

#### Opção B: Sem Docker (Download direto)

Se não usa Docker, você pode baixar o executável diretamente para o seu sistema operacional:

* **Mac/Linux (via Homebrew):** `brew install mailpit` e depois inicie com `mailpit`
* **Windows (via Scoop):** `scoop install mailpit`
* **Manual:** Baixe o executável na página de [Releases do Mailpit no GitHub](https://github.com/axllent/mailpit/releases), 
  extraia e dê dois cliques para rodar.

---

### Como configurar o Nodemailer para o seu SMTP Local

Uma vez que o Mailpit está rodando, ele abre duas portas cruciais:

* **`1025`**: A porta do servidor SMTP (onde o Nodemailer vai entregar os e-mails).
* **`8025`**: A porta do painel web (onde você vai ler os e-mails).

No seu código Node.js, configure o `transporter` apontando para o seu `localhost`:

```javascript
const nodemailer = require('nodemailer');

// Configuração apontando para o Mailpit local
const transporter = nodemailer.createTransport({
  host: '127.0.0.1',
  port: 1025,
  secure: false, // Não precisa de SSL/TLS para teste local
  auth: null     // Mailpit não exige autenticação por padrão
});

// Função para testar o envio
async function enviarEmail() {
  try {
    const info = await transporter.sendMail({
      from: '"Testador Local" <teste@meusistema.local>',
      to: 'cliente-teste@qualquerdominio.com',
      subject: 'Testando SMTP Local com Mailpit! 🚀',
      text: 'Se você está lendo isso, o SMTP local funcionou perfeitamente.',
      html: '<h1>Sucesso!</h1><p>E-mail capturado pelo <b>Mailpit</b>.</p>'
    });
    console.log('E-mail enviado! ID:', info.messageId);
  } catch (error) {
    console.error('Erro ao enviar:', error);
  }
}

enviarEmail();

```

---

### Visualizando seus e-mails

1. Abra o seu navegador e acesse: **`http://localhost:8025`**
2. Você verá uma caixa de entrada limpa.
3. Assim que rodar o seu script Node.js, o e-mail aparecerá instantaneamente nessa tela, com suporte a formatação HTML, 
   anexos e visualização responsiva para celular.

> 💡 **Alternativa em Nuvem (Sem instalar nada):**
> Se você não quiser rodar nada localmente, use o serviço gratuito **Ethereal Email**. 
> O próprio Nodemailer gera uma conta de testes automáticamente com o método `nodemailer.createTestAccount()`.

---

## 🛠️Configuração do servidor

### Variaveis de ambiente Docker (.env)
```text
PORT=3000

EMAIL_HOST=localhost
EMAIL_PORT=1025
EMAIL_USER=smtp@localhost
EMAIL_PASS=

```

### Variaveis de ambiente Gmail (.env)
```text
PORT=3000

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
```

---

### Modulo principal da aplicação (app.js)
```js
/*
 *  Servidor Principal Express com Múltiplas Rotas
 */
require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Importe os seus novos módulos de rotas aqui
const authRoutes = require('./routes/auth.routes'); 
// Entidade basicas de segurança:
const usuarioRoutes = require('./routes/usuario.routes');
const perfilRoutes = require('./routes/perfil.routes');
const permissaoRoutes = require('./routes/permissao.routes');
// Dashbord: 
const reportsRoutes = require('./routes/reports.routes');

/*
 * Monta a aplicação para execução
 */
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Registre as rotas no Express
app.use('/api/auth', authRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/perfil', perfilRoutes);
app.use('/api/permissao', permissaoRoutes);
app.use('/api/reports', reportsRoutes);

// Inicialização
const PORT = process.env.PORT || 3000;
// console.log('diretorio',__dirname);

app.listen(PORT, () => {
    console.log(`\n==================================================`);
    console.log(`🚀 Servidor rodando com sucesso na porta ${PORT}`);
    console.log(`==================================================`);
    console.log(`🚧 Auth:      http://localhost:${PORT}/api/auth`);
    console.log(`👥 Usuário:   http://localhost:${PORT}/api/usuario`);
    console.log(`👥 Perfil:    http://localhost:${PORT}/api/perfil`);
    console.log(`👥 Permissao: http://localhost:${PORT}/api/permissao`);
    console.log(`📊 Reports:   http://localhost:${PORT}/api/reports`);
    console.log(`==================================================\n`);
});
```

---

> Como estamos usando o Express e simulando os dados, criaremos classe/objeto de serviço que manipula os
dados em memória e exportamos as funções para uso nas rotas.


## Módulos de Configuração

### Configuração do banco de dados (config/database.js)
```js
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

/**
 * Abre a conexão com o banco de dados SQLite especificado.
 * @param {string} dbName - Nome do arquivo do banco (ex: 'base', 'gestao', ...)
 */
async function openDb(dbName = 'gestao') {
  // Constrói o caminho dinamicamente conforme o banco solicitado
  const dbPath = path.resolve(`./src/database/${dbName}.db`);

  return open({
    filename: dbPath,
    driver: sqlite3.Database
  });
}

module.exports = { openDb };

```

---


## Módulos de modes

### Modelo de HTTP/API (models/api.model.js)
```js
/**
 * Modelo padronizado para respostas HTTP
 * @param {boolean} success - Indica se a operação deu certo (true) ou se falhou (false)
 * @param {string} message  - Mensagem descritiva
 * @param {number} code     - Codigo Interno
 * @param {any} [data=null] - Dados retornados (opcional)
 */
const ApiResponse = (success, message, data = null, code = null) => {
  return {
    success: success,
    code: code,
    message: message,
    data: data,
    timestamp: new Date().toISOString() // Formato UTC ISO (ex: 2026-07-21T12:43:47.000Z)
  };
};

module.exports = ApiResponse;

```

### Modelo de Autorização (models/auth.model.js)
```js
class AuthData {
  /**
   * @param {string} email
   * @param {string} nomeCompleto
   * @param {string} telefone
   * @param {string} token
   * @param {Array<string>} permissoes
   */
  constructor({ email, nomeCompleto, telefone, token, permissoes = [] }) {
    this.email = email;
    this.nomeCompleto = nomeCompleto;
	this.telefone = telefone;
    this.token = token;
    this.permissoes = permissoes;
  }
}

module.exports = AuthData;
```

### Modelo de usuario (models/usuario.model.js)
```js
/**
 * Modelo padronizado para usuario
 * @param {number} id  (Opcional)
 * @param {string} email  
 * @param {string} nomeCompleto
 * @param {string} telefone
 * @param {string} senha (Opcional)
 */
const UsuarioModel = ( id = 0, email, nomeCompleto, telefone = null, senha = 'Senha@123' ) => {
    return {
        id: Number(id),
        email: email,
        nomeCompleto: nomeCompleto,
        telefone: telefone,
        senha: senha
    }
}

module.exports = UsuarioModel;
```

---

## Módulos do repositories

Faz o acesso diretamento da base de dados 

- Tabelas básicas

### Repository de Autorização (repositories/usuario.repository.js)
```js
const { openDb } = require('../config/database');

class UsuarioRepository {
    /*
     *  Inserir um novo registro na tabela
     */
    static async criar(dados) {
        const db = await openDb('base');

        const retorno = await db.run(
              "INSERT INTO auth_usuario (nomeCompleto, email, telefone, senha) VALUES (?, ?, ?, ?)",
              [dados.nomeCompleto, dados.email, dados.telefone, dados.senha ]
        );
     
        const novoDados = {
            "id": retorno.lastID, 
            "nomeCompleto": dados.nomeCompleto, 
            "email": dados.email, 
            "telefone": dados.telefone 
        };
        
        // Retorna o objeto recebido concatenado com o id gerado no banco
        return retorno ? novoDados : null;
    }

    /*
     *  Listar todos os registros da tabela
     */
    static async listarTodos() {
        const db = await openDb('base');

        const retorno = await db.all(
              "SELECT id, nomeCompleto, email, telefone, status, data_criacao " +
              "FROM auth_usuario " +
              "WHERE upper(nomeCompleto) not like '%ADMIN%' " +
              "ORDER BY id ASC"
        );

        return retorno || null;
    }

    /*
     *  Buscar um unico registro por ID
     */
    static async buscarPorId(id) {
        const db = await openDb('base');

        const retorno = await db.get(
              "SELECT * " +
              "FROM auth_usuario " +
              "WHERE upper(nomeCompleto) not like '%ADMIN%' " +
              "AND id = ?",
              [id]
        );
        
        return retorno || null;
    }

    /*
     *  Buscar um unico registro por Unique
     */
    static async buscarPorEmail(email) {
        const db = await openDb('base');

        const retorno = await db.get(
              "SELECT * " +
              "FROM auth_usuario " +
              "WHERE email = ?",
              [email]
        );
        
        return retorno || null;
    }

    /*
     *  Buscar as Credenciais do usuário por Unique
     */
    static async buscarCredencialPorEmail(email) {
        const db = await openDb('base');

        const retorno = await db.all(
            "SELECT DISTINCT t1.id, t1.nomeCompleto, t1.telefone, t1.senha, t4.regra " +
            "FROM auth_usuario t1 " +
                "INNER JOIN auth_usuario_perfis t2 " +
                        "ON t2.id_usuario = t1.id " +
                "INNER JOIN auth_perfil_permissoes t3 " +
                        "ON t3.id_perfil = t2.id_perfil " +
                "INNER JOIN auth_permissao t4 " +
                        "ON t4.id = t3.id_permissao " +
            "WHERE email = ? ORDER BY 3 ASC",
              [email]
        );

        return retorno || null;
    }

    /*
     *  Atualizar um unico registro da tabela
     */
    static async atualizar(id, dados) {
        const db = await openDb('base');

        const retorno = await db.run(
              "UPDATE auth_usuario SET nomeCompleto = ?, telefone = ? WHERE id = ?",
              [dados.nomeCompleto, dados.telefone, id]
        );

        return retorno;
    }

    /*
     *  Atualizar a senha de um determinado usuario por Unique
     */
    static async resetPassword(email, senha) {
        const db = await openDb('base');

        const retorno = await db.run(
              "UPDATE auth_usuario " + 
                "SET senha = ? WHERE email = ?",
                        [senha, email]
        );
        return retorno;
    }

    /*
     *  Excluir um unico registro da tabela
     */
    static async deletar(id) {
        const db = await openDb('base');

        const retorno = await db.run(
              "DELETE FROM auth_usuario WHERE id = ?",
              [id]
        );

        return retorno;
    }
}

module.exports = UsuarioRepository;
```

### Repository de Autorização (repositories/perfil.repository.js)
```js
const { openDb } = require('../config/database');

class PerfilRepository {
    /*
     *  Inserir um novo registro na tabela
     */
    static async criar(dados) {
        const db = await openDb('base');

        const retorno = await db.run(
              "INSERT INTO auth_perfil (nome, descricao) " +
              "VALUES (?, ?)",
              [dados.nome, dados.descricao ]
        );
     
        const novoDados = {
            "id": retorno.lastID, 
            "nome": dados.nome, 
            "descricao": dados.descricao
        };
        
        // Retorna o objeto recebido concatenado com o id gerado no banco
        return retorno ? novoDados : null;
    }

    /*
     *  Listar todos os registros da tabela
     */
    static async listarTodos() {
        const db = await openDb('base');

        const retorno = await db.all(
              "SELECT * " +
              "FROM auth_perfil " +
			  "WHERE upper(nome) not like '%ADMIN%' " +
              "ORDER BY id ASC"
        );

        return retorno || null;
    }

    /*
     *  Buscar um unico registro por ID
     */
    static async buscarPorId(id) {
        const db = await openDb('base');

        const retorno = await db.get(
              "SELECT * " +
              "FROM auth_perfil " +
              "WHERE upper(nome) not like '%ADMIN%' " +
              "AND id = ?",
              [id]
        );
        
        return retorno || null;
    }

    /*
     *  Buscar um unico registro por Unique
     */
    static async buscarPorNome(nome) {
        const db = await openDb('base');

        const retorno = await db.get(
              "SELECT * " +
              "FROM auth_perfil " +
              "WHERE nome = ?",
              [nome]
        );
        
        return retorno || null;
    }

    /*
     *  Atualizar um unico registro da tabela
     */
    static async atualizar(id, dados) {
        const db = await openDb('base');

        const retorno = await db.run(
              "UPDATE auth_perfil " +
              "SET descricao = ? WHERE id = ?",
              [dados.descricao, id]
        );

        return retorno;
    }

    /*
     *  Excluir um unico registro da tabela
     */
    static async deletar(id) {
        const db = await openDb('base');

        const retorno = await db.run(
              "DELETE FROM auth_perfil " + 
              "WHERE id = ?",
              [id]
        );

        return retorno;
    }
}

module.exports = PerfilRepository;
```

### Repository de Autorização (repositories/permissao.repository.js)
```js
const { openDb } = require('../config/database');

class PermissaoRepository {
    /*
     *  Inserir um novo registro na tabela
     */
    static async criar(dados) {
        const db = await openDb('base');

        const retorno = await db.run(
              "INSERT INTO auth_permissao (regra, descricao) " + 
              "VALUES (?, ?)",
              [dados.regra, dados.descricao ]
        );
     
        const novoDados = {
            "id": retorno.lastID, 
            "regra": dados.regra, 
            "descricao": dados.descricao
        };
        
        // Retorna o objeto recebido concatenado com o id gerado no banco
        return retorno ? novoDados : null;
    }

    /*
     *  Listar todos os registros da tabela
     */
    static async listarTodos() {
        const db = await openDb('base');

        const retorno = await db.all(
              "SELECT * " +
              "FROM auth_permissao " +
              "WHERE upper(regra) not like '%ADMIN%' " + 
              "ORDER BY id ASC"
        );

        return retorno || null;
    }

    /*
     *  Buscar um unico registro por ID
     */
    static async buscarPorId(id) {
        const db = await openDb('base');

        const retorno = await db.get(
              "SELECT * " +
              "FROM auth_permissao " +
              "WHERE upper(regra) not like '%ADMIN%' " + 
              "AND id = ?",
              [id]
        );
        
        return retorno || null;
    }

    /*
     *  Buscar um unico registro por Unique
     */
    static async buscarPorNome(regra) {
        const db = await openDb('base');

        const retorno = await db.get(
              "SELECT * " +
              "FROM auth_permissao " +
              "WHERE upper(regra) not like '%ADMIN%' " + 
              "AND regra = ?",
              [regra]
        );
        
        return retorno || null;
    }

    /*
     *  Atualizar um unico registro da tabela
     */
    static async atualizar(id, dados) {
        const db = await openDb('base');

        const retorno = await db.run(
              "UPDATE auth_permissao " + 
              "SET descricao = ? WHERE id = ?",
              [dados.descricao, id]
        );

        return retorno;
    }

    /*
     *  Excluir um unico registro da tabela
     */
    static async deletar(id) {
        const db = await openDb('base');

        const retorno = await db.run(
              "DELETE FROM auth_permissao " + 
              "WHERE id = ?",
              [id]
        );

        return retorno;
    }
}

module.exports = PermissaoRepository;
```

- Tabelas de Associação

### Repository de Autorização (repositories/usuarioPerfil.repository.js)
```js
const { openDb } = require('../config/database');

class UsuarioPerfisRepository {
    /*
     *  Lista os Perfis de um determinado usuario
     *  id (number) - Id do Usuario
     */
    static async buscarPerfisPorUsuario(id) {
        const db = await openDb('base');

        const retorno = await db.all(
                "SELECT id_usuario, id_perfil " + 
                "FROM auth_usuario_perfis " +
                "WHERE upper(descricao) not like '%ADMIN%' " +
                "AND id_usuario = ? " +
                "ORDER BY id_perfil ASC",
                [id]
        );

        return retorno || null;
    }

    /*
     *  Inclui multiplos registros na tabela de associação Usuario e Perfil
     *  id (number) - Id do Usuario
     *  lista (array) - [[ idPerfil: , descricao: },...] 
     */
    static async criarPerfis(id, lista) {
        const db = await openDb('base');
        // if (list && list.length > 0) {   }

        try {
            // Inicia a transação
            await db.run('BEGIN TRANSACTION');

            // DELETE: Remove as associações anteriores do usuário
            await db.run('DELETE FROM auth_usuario_perfis WHERE id_usuario = ?', [id]);

            // INSERT: Se houver itens na lista, faz a inserção em lote (1 único comando)
            // Cria os placeholders dinâmicos: "(?, ?, ?), (?, ?, ?), ..."
            const placeholders = lista.map(() => '(?, ?, ?)').join(', ');
            const sql = `INSERT INTO auth_usuario_perfis (id_usuario, id_perfil, descricao) VALUES ${placeholders}`;

            // Achata a lista de parâmetros para corresponder aos '?'
            const params = lista.flatMap(item => [id, item.idPerfil, item.descricao || null]);

            await db.run(sql, params);

            // Confirma as alterações
            await db.run('COMMIT');

            return { success: true, count: lista ? lista.length : 0 };
        } catch (error) {
            // Desfaz as alterações em caso de erro
            await db.run('ROLLBACK');
            throw error;
        }
    }
}

module.exports = UsuarioPerfisRepository;
```

### Repository de Autorização (repositories/perfilPermissoes.repository.js)
```js
const { openDb } = require('../config/database');

class PerfilPermissoesRepository {
    /*
     *  Lista as Permissoes de um determinado Perfil
     *  id (number) - Id do Perfil
     */
    static async buscarPermissoesPorPerfil(id) {
        const db = await openDb('base');

        const retorno = await db.all(
                "SELECT id_perfil, id_permissao " +
                "FROM auth_perfil_permissoes " +
                "WHERE upper(descricao) not like '%ADMIN%' " +
                "AND id_perfil = ? " +
                "ORDER BY id_permissao ASC",
                [id]
        );

        return retorno || null;
    }
  
    /*
     *  Incluir multiplos registros de associação de Perfil com Permissao
     *  id (number) - Id do Perfil
     *  list (array) - [{idPermissao: , descricao: },...]
     */
    static async criarPerfis(id, lista) {
        const db = await openDb('base');

        try {
            // Inicia a transação
            await db.run('BEGIN TRANSACTION');

            // DELETE: Remove as associações anteriores do usuário
            await db.run('DELETE FROM auth_perfil_permissoes WHERE id_perfil = ?', [id]);

            // INSERT: Se houver itens na lista, faz a inserção em lote (1 único comando)
            // Cria os placeholders dinâmicos: "(?, ?, ?), (?, ?, ?), ..."
            const placeholders = lista.map(() => '(?, ?, ?)').join(', ');
            const sql = `INSERT INTO auth_perfil_permissoes (id_perfil, id_permissao, descricao) VALUES ${placeholders}`;

            // Achata a lista de parâmetros para corresponder aos '?'
            const params = lista.flatMap(item => [id, item.idPermissao, item.descricao || null]);

            await db.run(sql, params);

            // Confirma as alterações
            await db.run('COMMIT');

            return { success: true, count: lista ? lista.length : 0 };
        } catch (error) {
            // Desfaz as alterações em caso de erro
            await db.run('ROLLBACK');
            throw error;
        }
    }
}

module.exports = PerfilPermissoesRepository;
```

---

## Módulos do roteamento

### Rotas de Autorização (routes/auth.route.js)
```js
/*
 *
 */
const express = require('express');
const router = express.Router();
const { gerarToken } = require('../utils/token');

// Importa os modelos
const ApiResponse = require('../models/api.model');
const AuthData = require('../models/auth.model');

// Importa os servicos
const AuthService = require('../services/auth.service');

// ==========================================
// ROTAS
// ==========================================

/*
 * Rota [POST] - Login que executa o procedimento
 *      URL: 'api/auth/login
 *      Body:   {
 *                  email: usuario@dominio.com
 *                  senha: senha
 *              }
 */
router.post('/login', async (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res
                .status(400)
                .json(ApiResponse(false, "Auth Login: Dados não informados."));
    }

    const { email, senha } = req.body;
    let retorno = null;

    try {
        retorno = await AuthService.buscarCredencial(email, senha)
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Auth Login: "+error.message, error.internalCode));
    }

    // Se encontrou, prossegue com o Token
    const tokenGenerated = gerarToken(retorno);

    // Instancia o model passando os dados
    const authData = new AuthData({
                                email: email,
                                nomeCompleto: retorno.nomeCompleto,
                                telefone: retorno.telefone,
                                token: tokenGenerated,
                                permissoes: retorno.permissoes
    });

    return res
            .status(200)
            .json(ApiResponse(true, "Auth Login: Executado com sucesso!", authData));

});

/*
 * ROTA [PUT] - Atualizar Senha do Usuario (U)
 *      URL: 'api/auth/reset/email
 *      Params: (string) - Email do usuario
 *      Body: {
 *              'senha':
 *          }
 */
router.put('/reset/:email', async (req, res) => {
    if (!req.params.email) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Auth Reset: Parm(id) não foi informado."));
    }
    const email = req.params.email;
    
    // Validação simples de formato de e-mail (usando Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if( !emailRegex.test(email) ){
        return res
                .status(400)
                .json(ApiResponse(false, "Auth Reset: Parm(email) deve ser um e-mail válido."));
    }

    if (!req.body || Object.keys(req.body).length === 0) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Auth Reset: Body(dados) não foi informados."));
    }

    const { senha } = req.body;
    let dados = null;

    try {
        await AuthService.atualizarSenha(email, senha);
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Auth Reset: "+error.message, error.internalCode));
    }

    try {
        dados = await AuthService.buscarCredencial(email, senha)
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Auth Reset: "+error.message, error.internalCode));
    }

    // Gera um novo Token
    const tokenGenerated = gerarToken(dados);

    // Instancia o model passando os dados
    const authData = new AuthData({
                                email: email,
                                nomeCompleto: dados.nomeCompleto,
                                token: tokenGenerated,
                                permissoes: dados.permissoes
    });

    return res
            .status(200)
            .json(ApiResponse(true, "Auth Reset: Executado com sucesso!", authData));
});

/*
 * Rota [POST] - Envio de email de Codigo de confirmação de alteracao
 *      URL: 'api/auth/sendEmail
 *      Body: {
 *              "email": "kenio@gestao.com",
 *              "codigo": "1234"
 *            }
 */
router.post('/sendEmail', async (req, res) => {
    // Se vazio/undefined, barramos o acesso
    if (!req.body || Object.keys(req.body).length === 0) {
        return res
                .status(400)
                .json(ApiResponse(false, "Auth SendEmail: Dados não informados."));
    }

    const { email, codigo } = req.body;
    // Validação simples dos dados de entrada
    if( !email || !codigo ){
        return res
                .status(401)
                .json(ApiResponse(false, "Auth SendEmail: Faltam dados obrigatórios para o envio."));
    }

    const assunto = "[Reset Password] - Verificação para troca de Password"
    const texto = `
Sr. Usuario.

Este é um e-mail tem o código de validação para troca de senha.

         Codigo: ${codigo}

OBS.: Não responda este e-mail

Equipe tecnica
`
    try {
        const infoData = await AuthService.enviarEmail(email, assunto, texto);
        return res
                .status(200)
                .json(ApiResponse(true, "Auth "+infoData));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Auth "+error.message, error.internalCode));
    }

});

module.exports = router;
```

### Rota de Usuários (routes/usuario.routes.js)
```js
/*
 *
 */
const express = require('express');
const router = express.Router();

const ApiResponse = require('../models/api.model');

const UsuarioService = require('../services/usuario.service');
const UsuarioPerfisService = require('../services/usuarioPerfis.service');

// ==========================================
// ROTAS
// ==========================================

/*
 * ROTA [POST] - Criar Usuário (C)
 *      URL: 'api/usuario
 *      Body: {
 *              nomeCompleto:
 *              email:
 *              telefone:
 *              senha:
 *          }
 */
router.post('/', async (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Usuário Criar: Dados não informados."));
    }

    try {
        const novoDados = await UsuarioService.criar(req.body);
        return res
                .status(201)
                .json(ApiResponse(true, "Usuário Criar: Executado com sucesso!", novoDados));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Usuário Criar: "+error.message, null,error.internalCode));
    }

});

/*
 * ROTA [GET] - Listar todos os Usuários (R)
 *      URL: 'api/usuario
 */
router.get('/', async (req, res) => {
    try {
        const listData = await UsuarioService.listarTodos();
        return res
                .status(200)
                .json(ApiResponse(true, "Usuário ListarTodos: Listados com sucesso!", listData));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Usuário listarTodos: "+error.message,null, error.internalCode));
    }
});

/*
 * ROTA [GET] - Buscar um usuário por ID (R)
 *      URL: 'api/usuario/id/1
 *      Params: (number) - id do registro na tabela
 */
router.get('/id/:id', async (req, res) => {
    if (!req.params.id) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Usuário BuscarPorId: Parm(id) não foi informado."));
    }

    const idParm = Number(req.params.id);
    if( isNaN(idParm) ){
      return res
                .status(400)
                .json(ApiResponse(false, "Usuário BuscarPorId: Parm(id) deve ser um numérico."));
    }   

    try {
        const retorno = await UsuarioService.buscarPorId(idParm);
        return res
                .status(200)
                .json(ApiResponse(true, "Usuário BuscarPorId: Executado com sucesso!", retorno));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Usuário BuscarPorId: "+error.message, null, error.internalCode));
    }
});

/*
 * ROTA [GET] - Buscar um usuário por Email (R)
 *      URL: 'api/usuario/email/usuario@email.com
 *      Params: (string) - email do usuario
 */
router.get('/email/:email', async (req, res) => {
    if (!req.params.email) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Usuário BuscarPorEmail: Parm(email) não foi informado."));
    }
    const email = req.params.email;
    // Validação simples de formato de e-mail (usando Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if( !emailRegex.test(email) ){
        return res
                .status(400)
                .json(ApiResponse(false, "Usuário BuscarPorEmail: Parm(email) deve ser um e-mail válido."));
    }

    try {
        const retorno = await UsuarioService.buscarPorEmail(email);
        return res
                .status(200)
                .json(ApiResponse(true, "Usuário BuscarPorEmail: Executado com sucesso!", retorno));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Usuário BuscarPorEmail: "+error.message, null, error.internalCode));
    }
});

/*
 * ROTA [PUT] - Atualizar Usuário (U)
 *      URL: 'api/usuario/1
 *      Params: (number) - Id do registro de tabela
 *      Body: {
 *              'nomeCompleto': 
 *              'telefone':
 *          }
 */
router.put('/:id', async (req, res) => {
    if (!req.params.id) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Usuário Atualizar: Parm(id) não foi informado."));
    }
    const idParm = Number(req.params.id);
    if( isNaN(idParm) ){
        return res
                .status(400)
                .json(ApiResponse(false, "Usuário Atualizar: Parm(id) deve ser um numérico."));
    }   

    if (!req.body || Object.keys(req.body).length === 0) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Usuário Atualizar: Body(dados) não foi informados."));
    }
    
    try {
        const retorno = await UsuarioService.atualizar(idParm, req.body);
        return res
                .status(200)
                .json(ApiResponse(true, "Usuário Atualizar: Executado com sucesso!"));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Usuário Atualizar: "+error.message, null, error.internalCode));
    }
});

/*
 * ROTA [DELETE] - Deletar Usuário (D)
 *      URL: 'api/usuario/1
 *      Params: (number) - Id do registro da tabela
 */
router.delete('/:id', async (req, res) => {
    if (!req.params.id) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Usuário Deletar: Parm(id) não foi informado."));
    }
    
    const idParm = Number(req.params.id);
    if( isNaN(idParm) ){
      return res
                .status(400)
                .json(ApiResponse(false, "Usuário Deletar: Parm(id) deve ser um numérico."));
    }

    try {
        const isDeletado = await UsuarioService.deletar(idParm);
        return res
                .status(200)
                .json(ApiResponse(true, "Usuário Deletar: Executado com sucesso!"));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Usuário Deletar: "+error.message, null, error.internalCode));
    }
});

/*
 * ROTA [GET] - Busca os associados Usuário e Perfis (R)
 *      URL: 'api/usuario/perfis/1
 *      Params: (number) - Id do registro na tabela (Usuario)
 */
router.get('/perfis/:id', async (req, res) => {
    if (!req.params.id) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Usuário Associados: Parm(id) não foi informado."));
    }
    
    const idParm = Number(req.params.id);
    if( isNaN(idParm) ){
      return res
                .status(400)
                .json(ApiResponse(false, "Usuário Associados: Parm(id) deve ser um numérico."));
    }

    try {
        const listData = await UsuarioPerfisService.buscarPerfisPorUsuario(idParm);
        return res
                .status(200)
                .json(ApiResponse(true, "Usuário Associados: Listados com sucesso!", listData));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Usuário Associados: "+error.message,null, error.internalCode));
    }

});

/*
 * ROTA [POST] - Criar associação de Usuário com Perfis(C)
 *      URL: 'api/usuario/perfis/1
 *      Params: (number) - Id do registro na tabela (Usuario)
 *      Body: {
 *              "lista": [{"idPerfil": "?", "descricao": "?????"},...]
 *          }
 */
router.post('/perfis/:id', async (req, res) => {
    if (!req.params.id) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Usuário Associados: Parm(id) não foi informado."));
    }
    
    const idParm = Number(req.params.id);
    if( isNaN(idParm) ){
      return res
                .status(400)
                .json(ApiResponse(false, "Usuário Associados: Parm(id) deve ser um numérico."));
    }
    
    if (!req.body || Object.keys(req.body).length === 0) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Usuário Associados: Dados não informados."));
    }

    try {
        const novoDados = await UsuarioPerfisService.criarPerfis(idParm, req.body.lista);
        return res
                .status(201)
                .json(ApiResponse(true, "Usuário Associados: Executado com sucesso!", novoDados));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Usuário Associados: "+error.message, null,error.internalCode));
    }

});

module.exports = router;
```

### Rota de Usuários (routes/perfil.routes.js)
```js
/*
 *
 */
const express = require('express');
const router = express.Router();

const ApiResponse = require('../models/api.model');

const PerfilService = require('../services/perfil.service');
const PerfilPermissoesService = require('../services/perfilPermissoes.service');

// ==========================================
// ROTAS
// ==========================================

/*
 * ROTA [POST] - Criar Perfil (C)
 *      URL: 'api/perfil
 *      Body: {
 *              nome:
 *              descricao:
 *          }
 */
router.post('/', async (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Perfil Criar: Dados não informados."));
    }

    try {
        const novoDados = await PerfilService.criar(req.body);
        return res
                .status(201)
                .json(ApiResponse(true, "Perfil Criar: Executado com sucesso!", novoDados));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Perfil Criar: "+error.message, null,error.internalCode));
    }

});

/*
 * ROTA [GET] - Listar todos os Perfis (R)
 *      URL: 'api/perfil
 */
router.get('/', async (req, res) => {
    try {
        const listData = await PerfilService.listarTodos();
        return res
                .status(200)
                .json(ApiResponse(true, "Perfil ListarTodos: Listados com sucesso!", listData));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Perfil listarTodos: "+error.message,null, error.internalCode));
    }
});

/*
 * ROTA [GET] - Buscar um Perfil por ID (R)
 *      URL: 'api/perfil/id/1
 *      Params: (number) - id do registro na tabela
 */
router.get('/id/:id', async (req, res) => {
    if (!req.params.id) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Perfil BuscarPorId: Parm(id) não foi informado."));
    }

    const idParm = Number(req.params.id);
    if( isNaN(idParm) ){
      return res
                .status(400)
                .json(ApiResponse(false, "Perfil BuscarPorId: Parm(id) deve ser um numérico."));
    }   

    try {
        const retorno = await PerfilService.buscarPorId(idParm);
        return res
                .status(200)
                .json(ApiResponse(true, "Perfil BuscarPorId: Executado com sucesso!", retorno));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Perfil BuscarPorId: "+error.message, null, error.internalCode));
    }
});

/*
 * ROTA [GET] - Buscar um Perfil por Email (R)
 *      URL: 'api/perfil/nome/Gerente
 *      Params: (string) - Nome do perfil (UNIQUE)
 */
router.get('/nome/:nome', async (req, res) => {
    if (!req.params.nome) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Perfil BuscarPorNome: Parm(nome) não foi informado."));
    }

    try {
        const retorno = await PerfilService.buscarPorNome(nome);
        return res
                .status(200)
                .json(ApiResponse(true, "Perfil BuscarPorNome: Executado com sucesso!", retorno));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Perfil BuscarPorNome: "+error.message, null, error.internalCode));
    }
});

/*
 * ROTA [PUT] - Atualizar Perfil (U)
 *      URL: 'api/perfil/1
 *      Params: (number) - Id do registro na tabela
 *      Body: {
 *              'descricao':
 *          }
 */
router.put('/:id', async (req, res) => {
    if (!req.params.id) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Perfil Atualizar: Parm(id) não foi informado."));
    }
    const idParm = Number(req.params.id);
    if( isNaN(idParm) ){
        return res
                .status(400)
                .json(ApiResponse(false, "Perfil Atualizar: Parm(id) deve ser um numérico."));
    }   

    if (!req.body || Object.keys(req.body).length === 0) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Perfil Atualizar: Body(dados) não foi informados."));
    }
    
    try {
        const retorno = await PerfilService.atualizar(idParm, req.body);
        return res
                .status(200)
                .json(ApiResponse(true, "Perfil Atualizar: Executado com sucesso!"));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Perfil Atualizar: "+error.message, null, error.internalCode));
    }
});

/*
 * ROTA [DELETE] - Deletar Perfil (D)
 *      URL: 'api/perfil/1
 *      Params: (number) - Id do registro na tabela
 */
router.delete('/:id', async (req, res) => {
    if (!req.params.id) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Perfil Deletar: Parm(id) não foi informado."));
    }
    
    const idParm = Number(req.params.id);
    if( isNaN(idParm) ){
      return res
                .status(400)
                .json(ApiResponse(false, "Perfil Deletar: Parm(id) deve ser um numérico."));
    }

    try {
        const isDeletado = await PerfilService.deletar(idParm);
        return res
                .status(200)
                .json(ApiResponse(true, "Perfil Deletar: Executado com sucesso!"));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Perfil Deletar: "+error.message, null, error.internalCode));
    }
});

/*
 * ROTA [GET] - Busca os associados Perfil com Permissoes (R)
 *      URL: 'api/perfil/permissoes/1
 *      Params: (number) - Id do registro na tabela (Perfil)
 */
router.get('/permissoes/:id', async (req, res) => {
    if (!req.params.id) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Perfil Associados: Parm(id) não foi informado."));
    }
    
    const idParm = Number(req.params.id);
    if( isNaN(idParm) ){
      return res
                .status(400)
                .json(ApiResponse(false, "Perfil Associados: Parm(id) deve ser um numérico."));
    }

    try {
        const listData = await PerfilPermissoesService.buscarPermissoesPorPerfil(idParm);
        return res
                .status(200)
                .json(ApiResponse(true, "Perfil Associados: Listados com sucesso!", listData));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Perfil Associados: "+error.message,null, error.internalCode));
    }

});

/*
 * ROTA [POST] - Criar associação de Perfil com Permissões (C)
 *      URL: 'api/perfil/permissoes/1
 *      Params: (number) - Id do registro na tabela (Perfil)
 *      Body: {
                "lista": [{"idPermissao": "?", "descricao": "?????"},...]
 *          }
 */
router.post('/permissoes/:id', async (req, res) => {
    if (!req.params.id) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Perfil Associados: Parm(id) não foi informado."));
    }
    
    const idParm = Number(req.params.id);
    if( isNaN(idParm) ){
      return res
                .status(400)
                .json(ApiResponse(false, "Perfil Associados: Parm(id) deve ser um numérico."));
    }
    
    if (!req.body || Object.keys(req.body).length === 0) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Perfil Associados: Dados não informados."));
    }

    try {
        const novoDados = await PerfilPermissoesService.criarPermissoes(idParm, req.body.lista);
        return res
                .status(201)
                .json(ApiResponse(true, "Perfil Associados: Executado com sucesso!", novoDados));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Perfil Associados: "+error.message, null,error.internalCode));
    }

});

module.exports = router;
```

### Rota de Usuários (routes/permissao.routes.js)
```js
/*
 *
 */
const express = require('express');
const router = express.Router();

const ApiResponse = require('../models/api.model');

const PermissaoService = require('../services/permissao.service');

// ==========================================
// ROTAS
// ==========================================

/*
 * ROTA [POST] - Criar Permissao (C)
 *      URL: 'api/permissao
 *      Body: {
 *              regra:
 *              descricao:
 *          }
 */
router.post('/', async (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Permissão Criar: Dados não informados."));
    }

    try {
        const novoDados = await PermissaoService.criar(req.body);
        return res
                .status(201)
                .json(ApiResponse(true, "Permissão Criar: Executado com sucesso!", novoDados));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Permissão Criar: "+error.message, null,error.internalCode));
    }

});

/*
 * ROTA [GET] - Listar todos as Permissões (R)
 *      URL: 'api/permissao
 */
router.get('/', async (req, res) => {
    try {
        const listData = await PermissaoService.listarTodos();
        return res
                .status(200)
                .json(ApiResponse(true, "Permissão ListarTodos: Listados com sucesso!", listData));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Permissão listarTodos: "+error.message,null, error.internalCode));
    }
});

/*
 * ROTA [GET] - Buscar um Permissao por ID (R)
 *      URL: 'api/permissao/id/1
 *      Params: (number) - id do registro na tabela
 */
router.get('/id/:id', async (req, res) => {
    if (!req.params.id) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Permissão BuscarPorId: Parm(id) não foi informado."));
    }

    const idParm = Number(req.params.id);
    if( isNaN(idParm) ){
      return res
                .status(400)
                .json(ApiResponse(false, "Permissão BuscarPorId: Parm(id) deve ser um numérico."));
    }   

    try {
        const retorno = await PermissaoService.buscarPorId(idParm);
        return res
                .status(200)
                .json(ApiResponse(true, "Permissão BuscarPorId: Executado com sucesso!", retorno));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Permissão BuscarPorId: "+error.message, null, error.internalCode));
    }
});

/*
 * ROTA [PUT] - Atualizar Permissao (U)
 *      URL: 'api/permissao/1
 *      Params: (number) - Id do registro na tabela
 *      Body: {
 *              'descricao':
 *          }
 */
router.put('/:id', async (req, res) => {
    if (!req.params.id) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Permissão Atualizar: Parm(id) não foi informado."));
    }
    const idParm = Number(req.params.id);
    if( isNaN(idParm) ){
        return res
                .status(400)
                .json(ApiResponse(false, "Permissão Atualizar: Parm(id) deve ser um numérico."));
    }   

    if (!req.body || Object.keys(req.body).length === 0) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Permissão Atualizar: Body(dados) não foi informados."));
    }
    
    try {
        const retorno = await PermissaoService.atualizar(idParm, req.body);
        return res
                .status(200)
                .json(ApiResponse(true, "Permissão Atualizar: Executado com sucesso!"));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Permissao Atualizar: "+error.message, null, error.internalCode));
    }
});

/*
 * ROTA [DELETE] - Deletar Permissão (D)
 *      URL: 'api/permissao/1
 *      Params: (number) - Id do registro na tabela
 */
router.delete('/:id', async (req, res) => {
    if (!req.params.id) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Permissão Deletar: Parm(id) não foi informado."));
    }
    
    const idParm = Number(req.params.id);
    if( isNaN(idParm) ){
      return res
                .status(400)
                .json(ApiResponse(false, "Permissão Deletar: Parm(id) deve ser um numérico."));
    }

    try {
        const isDeletado = await PermissaoService.deletar(idParm);
        return res
                .status(200)
                .json(ApiResponse(true, "Permissão Deletar: Executado com sucesso!"));
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Permissão Deletar: "+error.message, null, error.internalCode));
    }
});

module.exports = router;
```

## Rota de relatórios (routes/reports.route.js)
```js
/*
 *
 */
const express = require('express');
const router = express.Router();
const reportService = require('../services/report.service');

// ==========================================
// ROTAS
// ==========================================

// ROTA [GET] - Listar todos os Reports (R)
//      URL: 'api/reports'
router.get('/', (req, res) => {
    const resp = reportService.listarTodos();

    res.json({
            "message": "Reports listados com sucesso",
            "data": resp
    });
});

// ROTA [POST] - Criar um novo item
//      URL: 'api/reports'
router.post('/', (req, res) => {
    const resp = reportService.createReport(req.body);

    res.json({
            "message": "Reports criado com sucesso",
            "data": resp
    });
});

module.exports = router;

```

---

## Módulos de Serviços

### Serviços de Autorização (services/auth.service.js)
```js
/*
 *
 */
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

const AppError = require('../utils/AppError');
const UsuarioRepository = require('../repositories/usuario.repository');

const app = express();
app.use(express.json()); // Permite que o Express leia JSON no corpo das requisições

// Configuração do transportador do Nodemailer (Docker)
const transporter_local = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // Não precisa de SSL/TLS para teste local
    auth: null     // Mailpit não exige autenticação por padrão
});

// Configuração do transportador do Nodemailer (Gmail)
const transporter_server = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true para porta 465, false para outras portas (como 587)
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

class AuthService {
    /*
     *  [READ] - Busca as credenciais de Autorização:
     *      @param {string} - email 
     *      @param {string} - senha
     */
    static async buscarCredencial(email, senha){
        const list = await UsuarioRepository.buscarCredencialPorEmail(email);
        if (!list || list.length === 0) {
            throw new AppError("Credencial não localizada", 2001, 404);
        }

        // CRIPTOGRAFIA: Gera o hash da senha com um fator de custo 10
        const senhaCrypt = senha // await bcrypt.hash(senha, 10);

        if( list[0].senha != senhaCrypt ){
            throw new AppError("Senha esta invalida.", 2002, 404);
        }

        const retorno = {
            id: list[0].id,
            email: email,
            nomeCompleto: list[0].nomeCompleto,
            telefone: list[0].telefone,
            senha: list[0].senha,
            permissoes: list.map(item => item.regra) // Extrai todas as regras num array simples
        };

        return retorno;
    }
    
    /*
     *  [UPDATE] - Método atualiza a senha do usuario
     *      @param {string} - email 
     *      @param {string} - senha
     */
    static async atualizarSenha(email, senha ){
        // CRIPTOGRAFIA: Gera o hash da senha com um fator de custo 10
        const senhaCrypt = senha // await bcrypt.hash(senha, 10);

        const result = await UsuarioRepository.resetPassword(email, senhaCrypt)
        if( !result || result.changes == 0 ){
            throw new AppError("Usuário não modou a Senha", 2003, 404);
        }

        return null;
    }

    /*
     * [NODEMAILER] - Procedimento envio de email para servidor
     *      @param {string} para    - Destinatário para a mensagem
     *      @param {string} Assunto - Descrição resumido do email
     *      @param {string} texto   - Texto de composicao do email
     */
    static async enviarEmail(para, assunto, texto){
        try {
            // Envia o e-mail
            const info = await transporter_local.sendMail({
                                from: process.env.EMAIL_USER,               // Remetente
                                to: para,                                   // Destinatário
                                subject: assunto,                           // Assunto
                                text: texto,                                // Corpo em texto puro
                                html: null,                                 // Corpo em HTML (opcional)
            });
            return 'sendMail: Enviado com sucesso. messageId:' + info.messageId;

        } catch(error) {
            throw new AppError("sendMail: Erro ao enviar e-mail. Error:"+error, 2004, 404);
        }
    }
};

module.exports = AuthService;
```

### Servicos de Usuário (services/usuario.service.js)
```js
/*
 *
 */
const bcrypt = require('bcrypt');
const AppError = require('../utils/AppError');

const UsuarioRepository = require('../repositories/usuario.repository');

class UsuarioService {

    // [CREATE] - Procedimento para criar um novo usuário
    static async criar(dados){
        const senha = dados.senha || 'Senha@123'

        // CRIPTOGRAFIA: Gera o hash da senha com um fator de custo 10
        const senhaCrypt = senha; // await bcrypt.hash(senha, 10);

        const usuarioData = {
              nomeCompleto: dados.nomeCompleto,
              email: dados.email,
              telefone: dados.telefone || '(99) 99999-9999',
              senha: senhaCrypt
        };

        const newData = await UsuarioRepository.criar(usuarioData);
        if (!newData) {
            // Provoca o erro numerado: (mensagem, codigoInterno, httpStatus)
            throw new AppError("Usuário não localizado no sistema", 2001, 404);
        }

        return newData;
    }

    // [READ] - Procedimento para listar todos os usuários
    static async listarTodos(){
        const retorno = await UsuarioRepository.listarTodos();
        if (!retorno) {
            throw new AppError("Lista de usuarios esta vazia", 2002, 404);
        }

        return retorno;
    }

    // [READ by ID] - Procedimento para buscar um único usuário por ID
    static async buscarPorId(id){
        const retorno = await UsuarioRepository.buscarPorId(id);
        if (!retorno) {
            throw new AppError("Usuário não localizado no sistema", 2003, 404);
        }

        return retorno
    }

    // [READ by Email] - Procedimento para buscar um único usuário por Email 
    static async buscarPorEmail(email){
        const retorno = await UsuarioRepository.buscarPorEmail(email);
        if (!retorno) {
            throw new AppError("Usuário não localizado no sistema", 2004, 404);
        }
        return retorno;
    }

    // [UPDATE] - Procedimento para atualizar os dados de um usuário
    static async atualizar(id, dados){
        const retorno = await UsuarioRepository.atualizar(id, dados)
        if( !retorno || retorno.changes == 0 ){
            throw new AppError("Usuário não atualizado no sistema", 2005, 404);
        }

        return null;
    }

    // [DELETE] - Procedimento para remover um usuário
    static async deletar(id){
        const retorno = await UsuarioRepository.deletar(id);
        if( !retorno || retorno.changes == 0 ){
            throw new AppError("Usuário não foi excluido do sistema", 2007, 404);
        }

        return null;
    }
}

module.exports = UsuarioService;
```

### Servicos de Perfil (services/perfil.service.js)
```js
/*
 *
 */
const AppError = require('../utils/AppError');
const PerfilRepository = require('../repositories/perfil.repository');

class PerfilService {

    // [CREATE] - Procedimento para criar um novo perfil
    static async criar(dados){
        const localData = {
              nome: dados.nome,
              descricao: dados.descricao
        };

        const newData = await PerfilRepository.criar(localData);
        if (!newData) {
            // Provoca o erro numerado: (mensagem, codigoInterno, httpStatus)
            throw new AppError("Perfil não criado no sistema", 2001, 404);
        }

        return newData;
    }

    // [READ] - Procedimento para listar todos os perfils
    static async listarTodos(){
        const retorno = await PerfilRepository.listarTodos();
        if (!retorno) {
            throw new AppError("Lista de perfil esta vazia", 2002, 404);
        }

        return retorno;
    }

    // [READ by ID] - Procedimento para buscar um único perfil por ID
    static async buscarPorId(id){
        const retorno = await PerfilRepository.buscarPorId(id);
        if (!retorno) {
            throw new AppError("perfil não localizado no sistema", 2003, 404);
        }

        return retorno
    }

    // [READ by NOME] - Procedimento para buscar um único perfil por NOME
    static async buscarPorNome(nome){
        const retorno = await PerfilRepository.buscarPorNome(nome);
        if (!retorno) {
            throw new AppError("perfil não localizado no sistema", 2004, 404);
        }
        return retorno;
    }

    // [UPDATE] - Procedimento para atualizar os dados de um perfil
    static async atualizar(id, dados){
        const retorno = await PerfilRepository.atualizar(id, dados)
        if( !retorno || retorno.changes == 0 ){
            throw new AppError("perfil não atualizado no sistema", 2005, 404);
        }

        return null;
    }

    // [DELETE] - Procedimento para remover um perfil
    static async deletar(id){
        const retorno = await PerfilRepository.deletar(id);
        if( !retorno || retorno.changes == 0 ){
            throw new AppError("perfil não foi excluido do sistema", 2007, 404);
        }

        return null;
    }
}

module.exports = PerfilService;
```

### Servicos de Permissao (services/permissao.service.js)
```js
/*
 *
 */
const AppError = require('../utils/AppError');
const PermissaoRepository = require('../repositories/permissao.repository');

class PermissaoService {

    // [CREATE] - Procedimento para criar um novo permissao
    static async criar(dados){
        const localData = {
              regra: dados.regra,
              descricao: dados.descricao
        };

        const newData = await PermissaoRepository.criar(localData);
        if (!newData) {
            // Provoca o erro numerado: (mensagem, codigoInterno, httpStatus)
            throw new AppError("permissão não criado no sistema", 2001, 404);
        }

        return newData;
    }

    // [READ] - Procedimento para listar todos os permissaos
    static async listarTodos(){
        const retorno = await PermissaoRepository.listarTodos();
        if (!retorno) {
            throw new AppError("Lista de permissões esta vazia", 2002, 404);
        }

        return retorno;
    }

    // [READ by ID] - Procedimento para buscar um único permissao por ID
    static async buscarPorId(id){
        const retorno = await PermissaoRepository.buscarPorId(id);
        if (!retorno) {
            throw new AppError("permissão não localizado no sistema", 2003, 404);
        }

        return retorno
    }

    // [READ by NOME] - Procedimento para buscar um único permissao por NOME
    static async buscarPorNome(regra){
        const retorno = await PermissaoRepository.buscarPorNome(regra);
        if (!retorno) {
            throw new AppError("permissão não localizado no sistema", 2004, 404);
        }
        return retorno;
    }

    // [UPDATE] - Procedimento para atualizar os dados de um permissao
    static async atualizar(id, dados){
        const retorno = await PermissaoRepository.atualizar(id, dados)
        if( !retorno || retorno.changes == 0 ){
            throw new AppError("permissão não atualizado no sistema", 2005, 404);
        }

        return null;
    }

    // [DELETE] - Procedimento para remover um permissao
    static async deletar(id){
        const retorno = await PermissaoRepository.deletar(id);
        if( !retorno || retorno.changes == 0 ){
            throw new AppError("permissão não foi excluido do sistema", 2007, 404);
        }

        return null;
    }
}

module.exports = PermissaoService;
```

### Servicos de Associado Usuário com Perfis (services/usuarioPerfil.service.js)
```js
/*
 *
 */
const AppError = require('../utils/AppError');

const UsuarioRepository = require('../repositories/usuario.repository');
const PerfilRepository = require('../repositories/perfil.repository');
const UsuarioPerfisRepository = require('../repositories/usuarioPerfis.repository');

class UsuarioPerfisService {

    // [CREATE] - Procedimento associar usuario ao perfil
    static async criarPerfis(id, lista){
        const retorno = await UsuarioPerfisRepository.criarPerfis(id, lista);

        return null;
    }

    // [READ] - Procedimento para listar todos os perfis por Usuario(id)
    static async buscarPerfisPorUsuario(id){
        const retorno = await UsuarioRepository.buscarPorId(id);
        if (!retorno) {
            throw new AppError("Usuário não existe", 2001, 404);
        }
        const { senha, ...usuario } = retorno;

        const list1 = await UsuarioPerfisRepository.buscarPerfisPorUsuario(id);
        if (!list1) {
            throw new AppError("Lista de associação de Perfis esta vazia", 2002, 404);
        }

        // Criamos um Set com os IDs presentes na list1 para busca rápida O(1)
        const idsList1 = new Set(list1.map(item => item.id_perfil));

        const list2 = await PerfilRepository.listarTodos();
        if (!list2) {
            throw new AppError("Lista de perfil esta vazia", 2002, 404);
        }

        // Mapeamos a list2 adicionando a propriedade 'isConectado' para true/false
        const listResult = list2.map(item => ({...item, isConectado: idsList1.has(item.id)}));

        return { usuario: usuario, perfis: listResult } || null;
    }

}

module.exports = UsuarioPerfisService;
```


### Servicos de Associado Perfil com Permissoes (services/perfilPermissoes.service.js)
```js
/*
 *
 */
const AppError = require('../utils/AppError');

const PerfilRepository = require('../repositories/perfil.repository');
const PermissaoRepository = require('../repositories/permissao.repository');
const PerfilPermissoesRepository = require('../repositories/perfilPermissoes.repository');

class PerfilPermissoesService {

    // [CREATE] - Procedimento de associar perfil a permissoes
    static async criarPermissoes(id, lista){
        const retorno = await PerfilPermissoesRepository.criarPerfis(id, lista);

        return null;
    }

    // [READ] - Procedimento de listar associacoes de perfil com permissões
    static async buscarPermissoesPorPerfil(id){
        const retorno = await PerfilRepository.buscarPorId(id);
        if (!retorno) {
            throw new AppError("Perfil não existe", 2001, 404);
        }

        const list1 = await PerfilPermissoesRepository.buscarPermissoesPorPerfil(id);
        if (!list1) {
            throw new AppError("Lista de Permissões esta vazia", 2002, 404);
        }

        // Criamos um Set com os IDs presentes na list1 para busca rápida O(1)
        const idsList1 = new Set(list1.map(item => item.id_permissao));
        const list2 = await PermissaoRepository.listarTodos();
        if (!list2) {
            throw new AppError("Lista de associação de Perfils esta vazia", 2002, 404);
        }
        
        // Mapeamos a list2 adicionando a propriedade 'isConectado' para true/false
        const listResult = list2.map(item => ({...item, isConectado: idsList1.has(item.id)}));

        return { perfil: retorno, permissoes: listResult } || null;
    }

}

module.exports = PerfilPermissoesService;
```

## Serviços de relatórios (services/reports.service.js)
```js
/*
 *
 */
// MOCK - Simulação de ação de componente de coleta de dados
let reportData = 
{
  "metrics": [
    {
      "title": "Faturamento Mensal",
      "value": "R$ 45.200,50",
      "icon": "payments",
      "color": "green",
      "percentageChange": 12.5
    },
    {
      "title": "Novos Clientes",
      "value": 348,
      "icon": "person_add",
      "color": "blue",
      "percentageChange": 8.2
    },
    {
      "title": "Taxa de Conversão",
      "value": "4.8%",
      "icon": "trending_up",
      "color": "purple",
      "percentageChange": -1.4
    },
    {
      "title": "Pedidos Pendentes",
      "value": 14,
      "icon": "pending_actions",
      "color": "orange",
      "percentageChange": 0.0
    }
  ],
  "recentActivity": [
    {
      "id": "act_01",
      "user": "Carlos Henrique",
      "description": "Finalizou a compra do plano Premium",
      "time": "Há 5 minutos",
      "status": "success"
    },
    {
      "id": "act_02",
      "user": "Ana Beatriz",
      "description": "Abriu um chamado de suporte técnico",
      "time": "Há 22 minutos",
      "status": "warning"
    },
    {
      "id": "act_03",
      "user": "Marcos Silva",
      "description": "Cancelou a assinatura do plano Basic",
      "time": "Há 1 hora",
      "status": "danger"
    }
  ]
}

const reportService = {
    // [READ] - Procedimento para listar todos os reposts
    listarTodos: () => {
        return reportData;
    },

    // [CREATE] - Criação de um novo item
    createReport: (dados) => {
        const newReport = { id: reports.length + 1, ...dados };
        reports.push(newReport);
        return newReport
    }
};

module.exports = reportService;
```

----

## Módulos de Utilitários

### Manipulação de Erros (utils/appError.js)
```js
/*
 * AppError - Tratamento de Erros 
 */
class AppError extends Error {
    constructor(message, internalCode = null, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;       // Ex: 400, 404, 500
        this.internalCode = internalCode;   // Ex: 1001, 1002
    }
}

module.exports = AppError;
```

### Utilitário para tratamento de Token (utils/token.js)
```js
/*
 *  Gera o token para sessão
 */
const jwt = require('jsonwebtoken');

// Chave secreta que APENAS o seu servidor deve saber. 
// No mundo real, guarde isso em um arquivo .env
// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
const SECRET_KEY = "MinhaFraseSecretaSuperProtegida_2026#TokenJWT!";

/**
 * Gera um JWT para um usuário
 * @param {Object} user - Objeto com os dados do usuário (id, email, etc.)
 * @returns {string} Token JWT gerado
 */
function gerarToken(data) {
  // Dados que você quer que fiquem guardados dentro do token
  const payload = {
    id: data.id,
    email: data.email,
    role: data.senha || 'passwrd'
  };

  // Opções do token (como tempo de expiração)
  const options = {
    expiresIn: '8h' // O token vai expirar automaticamente em 8 horas
  };

  // Gera e retorna o token assinado com a sua chave secreta
  return jwt.sign(payload, SECRET_KEY, options);
}

module.exports = { gerarToken };
```

---

### O que essa estrutura resolve

* **Tipagem respeitada:** O objeto enviado via `req.body` no Angular vai encaixar perfeitamente nas propriedades.
* **Tratamento de Opcionais:** A propriedade `senha?` com o ponto de interrogação no Angular indica que ela é opcional.
  No método `criar`, adicionamos uma proteção: se ela não vier na requisição, definimos uma senha padrão (**`"Senha@123"`**).

---

## Iniciar o Backend Node.js

No diretório Node-Express-Backend:
- **npm start**
- Alternativamente com nodemon: **npm run dev**