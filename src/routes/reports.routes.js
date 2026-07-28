/*
 *
 */
const express = require('express');
const router = express.Router();
const reportService = require('../services/report.service');
// Importa o modelo de resposta padronizado
const ApiResponse = require('../models/api.model');

// ==========================================
// ROTAS
// ==========================================

// ROTA [GET] - Listar todos os Reports (R)
//      URL: 'api/reports'
router.get('/', (req, res) => {
    const respData = reportService.listarTodos();

	return res
			.status(200)
			.json(ApiResponse(true, "Reports List: Listado com sucesso!", respData));
});

// ROTA [POST] - Criar um novo item
//      URL: 'api/reports'
router.get('/', (req, res) => {
	// Se o body for vazio ou indefinido, barra o acesso
	if (!req.body || Object.keys(req.body).length === 0) {
		return res
				.status(400) 
				.json(ApiResponse(false, "Reports Create: Dados não informados."));
	}

    const respData = reportService.createReport(req.body);

	return res
			.status(201)
			.json(ApiResponse(true, "Reports Create: Criado com sucesso!", respData));
});

module.exports = router;
