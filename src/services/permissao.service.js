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
