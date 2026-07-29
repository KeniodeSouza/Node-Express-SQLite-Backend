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

