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
- [Git](https://git-scm.com/)

### Passo a passo

```bash
# 1. Clone este repositório
$ git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)

# 2. Acesse a pasta do projeto
$ cd SEU_REPOSITORIO

# 3. Instale as dependências
$ npm install

# 4. Execute a aplicação em modo de desenvolvimento
$ npm run dev # ou npm start# Servidor Backend com Node.js + Express + SQLite para teste, via API


## Criar projeto Node
```bash
mkdir Node-Express-SQLite-Backend

cd Node-Express-SQLite-Backend

npm init -y

npm install express cors dotenv body-parser jsonwebtoken nodemailer 

npm install sqlite3 sqlite bcrypt

npm install nodemon --save-dev

```

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
 │   ├── routes/
 │   │   ├── auth.routes.js
 │   │   ├── reports.routes.js
 │   │   └── usuario.routes.js
 │   ├── services/
 │   │   ├── auth.service.js
 │   │   ├── reports.service.js
 │   │   └── usuario.service.js
 │   ├── repositories/
 │   │   └── usuario.repository.js
 │   ├── utils/
 │   │   ├── appError.js
 │   │   └── token.js
 │   └── app.js
 ├── .env
 └── package.json
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

### Variaveis de ambiente Gmail (.env)
```text
PORT=3000

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
```

### Variaveis de ambiente Docker (.env)
```text
PORT=3000

EMAIL_HOST=localhost
EMAIL_PORT=1025
EMAIL_USER=smtp@local.com
EMAIL_PASS=

```

---

### Modulo principal da aplicação (app.js)
```js
/*
 * Servidor Node e Express para teste de API
 */
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// 1. Importe os seus novos módulos de rotas aqui
const authRoutes = require('./routes/auth.routes');
const usersRoutes = require('./routes/user.routes');
const reportsRoutes = require('./routes/reports.routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 2. Registre as rotas no Express
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/reports', reportsRoutes);

// Inicialização
const PORT = process.env.PORT || 3000;;
app.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🚀 Servidor rodando com sucesso na porta ${PORT}`);
  console.log(`==================================================`);
  console.log(`🎌 Auth:      http://localhost:${PORT}/api/auth`);
  console.log(`👥 Usuários:  http://localhost:${PORT}/api/users`);
  console.log(`📊 Reports:   http://localhost:${PORT}/api/reports`);
  console.log(`==================================================\n`);
});
```

---

> Como estamos usando o Express e simulando os dados, criaremos classe/objeto de serviço que manipula os
dados em memória e exportamos as funções para uso nas rotas.


## Módulos do roteamento

### Rotas de Autorização (routes/auth.route.js)
```js
/*
 * 
 */
const express = require('express');
const router = express.Router();
const { gerarToken } = require('../utils/token'); 
const authService = require('../services/auth.service'); 
const userService = require('../services/user.service'); 

// ==========================================
// ROTAS
// ==========================================

// Rota [GET] - busca padrão (C)
//      URL: 'api/auth
router.get('/', (req, res) => {
    
  const dados = authService.buscarTodos();
    
  res.json({
    message: "Auth Todos: Executado com sucesso",
    data: dados
  });
});

// Rota [POST] - Login que executa o procedimento
//      URL: 'api/auth/login
router.post('/login', (req, res) => {
  // Se vazio/undefined, barramos o acesso
  
  if( !req.body ){
    return res.status(401).json({
      message: "Auth Login: Dados não informados.",
      data: null
    });
  }

  const { email, senha } = req.body;

  // Busca a credencial de autorização
  const dados = authService.buscarPorCredencial(email);

  // Se o procedimento retornar vazio/undefined, barramos o acesso
  if (!dados) {
    return res.status(401).json({
      message: "Auth Login: E-mail esta incorreto.",
      data: null
    });
  }

  // Se a senha informada esta correta
  if( !authService.isSenhaValida(email, senha) ){
    return res.status(401).json({
      message: "Auth Login: Senha esta incorreta.",
      data: null
    });
  }

  // Se encontrou, prossegue com o Token
  const tokenGenerated = gerarToken(dados);

  const authResponse = {
    "email": email,
    "nomeCompleto": dados.nomeCompleto,
    "token": tokenGenerated,
    "permissoes": dados.permissoes
  };

  res.json({
    message: "Auth Login: Executado com sucesso.",
    data: authResponse
  });
});

// Rota [PUT] - Alteracao da senha do usuario
//      URL: 'api/auth/reset-password
router.put('/resetPassword', (req, res) => {
  if (!req.body) {
    return res.status(401).json({
      message: "Auth Erro de mudança de senha. Erro: Sem dados.",
      data: null
    });
  }

  const { email, senha } = req.body;
  
  // Busca a credencial de autorização
  const dados = authService.buscarPorCredencial(email);
  // Se o procedimento retornar vazio/undefined
  if (!dados) {
    return res.status(401).json({
      message: "Auth resetPassword: Usuário não encontrado.",
      data: null
    });
  }
  
  const user = userService.atualizarSenha(email, senha);
console.log('Auth resetPassword', user);

  // Gera um novo Token
  const tokenGenerated = gerarToken(dados);

  const authResponse = {
    nomeCompleto: dados.nomeCompleto,
    token: tokenGenerated,
    permissoes: dados.permissoes
  };

  res.json({
    message: "Auth resetPassword: Procedimento executado com sucesso.",
    data: authResponse
  });
 
});

// Rota [POST] - Envio de email de Codigo de confirmação de alteracao
//      URL: 'api/auth/sendEmail
//          {
//              "para": "keniodesouza@gmail.com",
//              "assunto": "Testando Email para Node + Express",
//              "texto": "[Email] - Este é um teste enviado via Nodemailer.",
//          }
router.post('/sendEmail', async (req, res) => {
    if (!req.body) {
        return res.status(401).json({
                                    message: "Auth SendEmail: Body sem dados.",
                                    data: null
                                });
    }

    const { email, token } = req.body;
    // Validação simples dos dados de entrada
    if( !email || !token ){
        return res.status(400).json({ 
                                    message: "Auth SendEmail: Faltam dados obrigatórios para o envio.'",
                                    data: null
                                });
    }
    const assunto = "[Reset Password] - Verificação para troca de Password"
    const texto = `
Sr. Usuario.

Este é um e-mail com o código de validação para troca de senha.

         Codigo: ${token}

OBS.: Não responda este e-mail

Equipe tecnica
`

    const resp = await authService.enviarEmail(email, assunto, texto);

    res.json({
            message: "Auth SendEmail: Executado com sucesso.",
            data: resp
        });
});

module.exports = router;

```


### Rota de Usuários (routes/user.routes.js)
```js
/*
 *
 */
const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');

// ==========================================
// ROTAS
// ==========================================

// ROTA [POST] - Criar Usuário (C)
//      URL: 'api/users
router.post('/', (req, res) => {
    const novoUsuario = userService.criar(req.body);

    res.status(201).json({
            "message": "Usuário criado com sucesso",
            "data": novoUsuario
    });
});

// ROTA [GET] - Listar todos os Usuários (R)
//      URL: 'api/users
router.get('/', (req, res) => {
    const usuarios = userService.listarTodos();

    res.json({
            "message": "Usuários listados com sucesso",
            "data": usuarios
    });
});

// ROTA [GET] - Buscar um usuário por ID (R)
//      URL: 'api/users/id/1
router.get('/id/:id', (req, res) => {
    const usuario = userService.buscarPorId(req.params.id);

    if (!usuario){
        return res.status(404).json({
                    "message": "Usuário não encontrado",
                    "data": null
                });
    }

    res.json({
            "message": "Usuário buscado com sucesso",
            "data": usuario
    });
});

// ROTA [GET] - Buscar um usuário por Email (R)
//      URL: 'api/users/email/usuario@email.com
router.get('/email/:email', (req, res) => {
    const usuario = userService.buscarPorEmail(req.params.email);

    if (!usuario){
        return res.status(404).json({
                    "message": "Usuário não encontrado",
                    "data": null
                });
    }

    res.json({
            "message": "Usuário de email capturado com sucesso",
            "data": usuario
    });
});


// ROTA [PUT] - Atualizar Usuário (U)
//      URL: 'api/users/1
router.put('/:id', (req, res) => {
    const usuario = userService.atualizar(req.params.id, req.body);

    if (!usuario){
        return res.status(404).json({
                                    "message": "Usuário não encontrado",
                                    "data": null
                });
    }

    res.json({
            "message": "Usuário atualizado com sucesso",
            "data": usuario
    });
});

// ROTA [DELETE] - Deletar Usuário (D)
//      URL: 'api/users/1
router.delete('/:id', (req, res) => {
    const isDeletado = userService.deletar(req.params.id);
    if (!isDeletado){
        return res.status(404).json({
                                    "message": "Usuário não encontrado",
                                    "data": null
        });
    }

    res.json({
            "message": "Usuário removido com sucesso",
            "data": null
    });
});

// ROTA [GET] - Pesquisa a existencia do usuário com o e-mail informado (R)
//      URL: 'api/users/exists?email=usuario@email.com'
router.get('/exists', (req, res) => {
    const { email } = req.query; // pega o parâmetro da query string

    if (!email) {
        return res.status(400).json({ error: 'Email é obrigatório' });
    }
    const exists = userService.checkEmailExists(email)

    res.status(200).json({
            "message": "Check Usuário com sucesso",
            "data": {exists}
    });
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
 
// MOCK - Simulação da base de dados
let bancoDeDadosUsuarios = [
  {
    "id": 1,
    "email": "keniodesouza@gmail.com",
    "nomeCompleto": "Kênio de Souza",
    "telefone": "(62) 98294-1012",
    "senha": "123456",
    "permissoes": ["admin:access", "usuario:read", "usuario:create", "usuario:update"]
  },
  {
    "id": 2,
    "email": "normadeoliveira@gmail.com",
    "nomeCompleto": "Norma de Oliveira",
    "telefone": "(62) 98282-1012",
    "senha": "456789",
    "permissoes": ["pessoa:read"]
  }
];

const app = express();
app.use(express.json()); // Permite que o Express leia JSON no corpo das requisições

// Configuração do transportador do Nodemailer (Docker) Mailpit
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

const authService = {
    // [READ] - Procedimento para buscar toda as lista de usuarios
    buscarTodos: () => {
        return bancoDeDadosUsuarios;
    },

    // [READ by Email] - Procedimento para buscar um único usuário por Email
    buscarPorCredencial: (emailPesquisa) => {
        // Esse procedimento isola a lógica de busca.
        // Se no futuro você usar MySQL, MongoDB, etc., só precisará mudar este bloco.
        return bancoDeDadosUsuarios.find(
            (user) => user.email === emailPesquisa
        );
    },

    // [Validation] - Procedimento verifica se senha esta correta
    isSenhaValida: (emailPesquisa, senhaPesquisa) => {
        return bancoDeDadosUsuarios.some(
            (user) => user.email === emailPesquisa && user.senha === senhaPesquisa
        );
    },

    // [UPDATE by Email] - Procedimento atualização de nova senha
    atualizarSenha: (emailParm, novaSenhaParm) => {
        const indice = bancoDeDadosUsuarios.findIndex(user => user.email === emailParm);

        if (indice === -1) return null; // Usuário não encontrado

        // Mescla os dados antigos com os novos que foram enviados
        bancoDeDadosUsuarios[indice] = {
                                        ...bancoDeDadosUsuarios[indice],
                                            senha: novaSenhaParm || bancoDeDadosUsuarios[indice].senha
        };

        return bancoDeDadosUsuarios[indice];
    },

    // [NODEMAILER] - Procedimento envio de email para servidor
    enviarEmail: async (para, assunto, texto) => {
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
            return 'sendMail: Erro ao enviar e-mail. Error:' + error;
        }
    },

};

module.exports = authService;

```

### Servicos de Usuário (services/user.service.js)
```js
/*
 *
 */
// MOCK - Simulação da tabela/coleção de Usuários na base de dados
let bancoDeDadosUsuarios = [
  {
    "id": 1,
    "email": "keniodesouza@gmail.com",
    "nomeCompleto": "Kênio de Souza",
    "telefone": "(62) 98294-1012",
    "senha": "123456",
    "permissoes": ["user:access", "user:read", "user:create"]
  }
];

const userService = {
  
    // [CREATE] - Procedimento para criar um novo usuário
    criar: (dados) => {
        // Contador para simular IDs autoincrementais do banco de dados
        let proximoId = bancoDeDadosUsuarios.length;

        const novoUsuario = {
                id: proximoId++,
                email: dados.email,
                nomeCompleto: dados.nomeCompleto,
                telefone: dados.telefone,
                senha: dados.senha || "Senha@123", // senha padrão caso não seja enviada
                permissoes: ["pessao:access"] // permissão padrão inicial
        };
    
        bancoDeDadosUsuarios.push(novoUsuario);
        return novoUsuario;
    },

    // [READ] - Procedimento para listar todos os usuários
    listarTodos: () => {
        return bancoDeDadosUsuarios;
    },

    // [READ by ID] - Procedimento para buscar um único usuário pelo ID
    buscarPorId: (id) => {
        return bancoDeDadosUsuarios.find(user => user.id === parseInt(id));
    },

    // [READ by Email] - O procedimento de busca que usamos para o login
    buscarPorEmail: (email) => {
        return bancoDeDadosUsuarios.find(user => user.email.toLowerCase() === email.toLowerCase());
    },

    // [UPDATE] - Procedimento para atualizar os dados de um usuário
    atualizar: (id, dadosAtualizados) => {
        const indice = bancoDeDadosUsuarios.findIndex(user => user.id === parseInt(id));
    
        if (indice === -1) return null; // Usuário não encontrado

        // Mescla os dados antigos com os novos que foram enviados
        bancoDeDadosUsuarios[indice] = {
                                        ...bancoDeDadosUsuarios[indice],
                                                nomeCompleto: dadosAtualizados.nomeCompleto || bancoDeDadosUsuarios[indice].nomeCompleto,
                                                telefone: dadosAtualizados.telefone || bancoDeDadosUsuarios[indice].telefone
                                        };

        return bancoDeDadosUsuarios[indice];
    },

    // [DELETE] - Procedimento para remover um usuário
    deletar: (id) => {
        const indice = bancoDeDadosUsuarios.findIndex(user => user.id === parseInt(id));
    
        if (indice === -1) return false;

        bancoDeDadosUsuarios.splice(indice, 1); // Remove do array
        return true;
    },
    
    // [READ] - Método que simula a rota 'users/exists?email=usuario@email.com'
    checkEmailExists: (email) => {
        // Procuramos se existe algum usuário na lista com o e-mail informado
        // O método .some() retorna true se encontrar, ou false se não encontrar
        const existe = bancoDeDadosUsuarios.some(user => user.email.toLowerCase() === email.toLowerCase());

        // Retornamos esse booleano "envelopado" em um Observable (simulando a resposta do HttpClient)
        return existe;
    },

    // [UPDATE] - Método atualiza a senha do usuario
    atualizarSenha: (email, senha ) => {
        // Procuramos se existe algum usuário na lista com o e-mail informado
        const index = bancoDeDadosUsuarios.findIndex(user => user.email.toLowerCase() === email.toLowerCase());
        if (index === -1) return false;

        // Mescla os dados antigos com a senha nova
        bancoDeDadosUsuarios[index] = {
                                        ...bancoDeDadosUsuarios[index],
                                                senha: senha || bancoDeDadosUsuarios[index].senha
                                        };

        return bancoDeDadosUsuarios[index];
    }
};

module.exports = userService;

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
// src/utils/AppError.js
class AppError extends Error {
    constructor(message, internalCode, statusCode = 500) {
        super(message);
        this.statusCode = statusCode; // Ex: 400, 404, 500
        this.internalCode = internalCode; // Ex: 1001, 1002
    }
}

module.exports = AppError;
```

### Utilitário para tratamento de Token (utils/token.js)
```js
/*
 * 
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
    role: data.password || 'passwrd'
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