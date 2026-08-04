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

    const id = Number(req.params.id);
    if( isNaN(id) ){
      return res
                .status(400)
                .json(ApiResponse(false, "Perfil BuscarPorId: Parm(id) deve ser um numérico."));
    }   

    try {
        const retorno = await PerfilService.buscarPorId(id);
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
    const id = Number(req.params.id);
    if( isNaN(id) ){
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
        const retorno = await PerfilService.atualizar(id, req.body);
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
    
    const id = Number(req.params.id);
    if( isNaN(id) ){
      return res
                .status(400)
                .json(ApiResponse(false, "Perfil Deletar: Parm(id) deve ser um numérico."));
    }

    try {
        const isDeletado = await PerfilService.deletar(id);
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
    
    const id = Number(req.params.id);
    if( isNaN(id) ){
      return res
                .status(400)
                .json(ApiResponse(false, "Perfil Associados: Parm(id) deve ser um numérico."));
    }

    try {
        const listData = await PerfilPermissoesService.buscarPermissoesPorPerfil(id);
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
    
    const id = Number(req.params.id);
    if( isNaN(id) ){
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
        const novoDados = await PerfilPermissoesService.criarPermissoes(id, req.body.lista);
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
