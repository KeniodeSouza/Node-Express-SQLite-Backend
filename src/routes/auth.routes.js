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
 *                  'email': 
 *                  'senha': 
 *              }
 */
router.post('/login', async (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res
                .status(400)
                .json(ApiResponse(false, "Auth Login: Dados não informados."));
    }

    const { email, senha } = req.body;

    if( !email || !senha ){
        return res
                .status(401)
                .json(ApiResponse(false, "Auth Login: Faltam dados obrigatórios."));
    }

    // Validação simples de formato de e-mail (usando Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if( !emailRegex.test(email) ){
        return res
                .status(400)
                .json(ApiResponse(false, "Auth Login: email deve ser um e-mail válido."));
    }

    let retorno = null;

    try {
        retorno = await AuthService.buscarCredencial(email, senha)
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Auth Login: "+error.message, error.internalCode));
    }

    // Gera um Token para session
    const tokenData = {
            id: retorno.id || null,
            email: email,
            role: senha
        };
    const tokenGenerated = gerarToken(tokenData);

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
 *      URL:  'api/auth/reset'
 *      Body: {
 *              'email':
 *              'senha':
 *           }
 */
router.put('/reset', async (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res
                .status(400) 
                .json(ApiResponse(false, "Auth Reset: Body(dados) não foi informados."));
    }

    const { email, senha } = req.body;
    
    if( !email || !senha ){
        return res
                .status(401)
                .json(ApiResponse(false, "Auth Reset: Faltam dados obrigatórios."));
    }

    // Validação simples de formato de e-mail (usando Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if( !emailRegex.test(email) ){
        return res
                .status(400)
                .json(ApiResponse(false, "Auth Reset: Parm(email) deve ser um e-mail válido."));
    }

    let retorno = null;

    try {
        retorno = await AuthService.atualizarSenha(email, senha);
    } catch (error) {
        const status = error.statusCode || 500
        return res
                .status(status)
                .json(ApiResponse(false, "Auth Reset: "+error.message, error.internalCode));
    }

    // Gera um novo Token
    const tokenData = {
            id: retorno.id || null,
            email: email,
            role: senha
        };
    const tokenGenerated = gerarToken(tokenData);

    // Instancia o model passando os dados
    const authData = new AuthData({
                                email: email,
                                nomeCompleto: retorno.nomeCompleto,
                                token: tokenGenerated,
                                permissoes: retorno.permissoes
    });

    return res
            .status(200)
            .json(ApiResponse(true, "Auth Reset: Executado com sucesso!", authData));
});

/*
 * Rota [POST] - Envio de email de Codigo de confirmação de alteracao
 *      URL: 'api/auth/sendEmail
 *      Body: {
 *              "email":
 *              "codigo":
 *            }
 */
router.post('/sendEmail', async (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res
                .status(400)
                .json(ApiResponse(false, "Auth SendEmail: Dados não informados."));
    }

    const { email, codigo } = req.body;

    if( !email || !codigo ){
        return res
                .status(401)
                .json(ApiResponse(false, "Auth SendEmail: Faltam dados obrigatórios."));
    }

    // Validação simples de formato de e-mail (usando Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if( !emailRegex.test(email) ){
        return res
                .status(400)
                .json(ApiResponse(false, "Auth SendEmail: email deve ser um e-mail válido."));
    }

    // Validação simples do codigo de autorização
    if( isNaN(Number(codigo)) ){
      return res
                .status(400)
                .json(ApiResponse(false, "Auth SendEmail: Código deve ser um numérico."));
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