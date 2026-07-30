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