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
