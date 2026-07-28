/*
 *
 */
const express = require('express');
const router = express.Router();

const ApiResponse = require('../models/api.model');
// const UsuarioData = require('../models/usuario.model');

const UsuarioService = require('../services/usuario.service');

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
    // Se o body for vazio ou indefinido, barra o acesso
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
        // Use `await` here when calling the service
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
 *      Params: (number) - id do registro
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
 *      Params: (number) - Id do registro do usuario
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
 *      Params: (number) - Id do registro do usuario
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

module.exports = router;
