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
