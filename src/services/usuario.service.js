/*
 *
 */
const AppError = require('../utils/AppError');
const UsuarioRepository = require('../repositories/usuario.repository');

class UsuarioService {

    // [CREATE] - Procedimento para criar um novo usuário
    static async criar(dados){
        const usuarioData = {
              nomeCompleto: dados.nomeCompleto,
              email: dados.email,
              telefone: dados.telefone || '(99) 99999-9999',
              senha: dados.senha || 'Senha@123'
        };

        const newData = await UsuarioRepository.criar(usuarioData);
        if (!newData) {
            // Provoca o erro numerado: (mensagem, codigoInterno, httpStatus)
            throw new AppError("Usuário não localizado no sistema", 2001, 404);
        }

        return newData;
    }

    // [READ] - Procedimento para listar todos os usuários
    static async listarTodos(){
        const retorno = await UsuarioRepository.listarTodos();
        if (!retorno) {
            throw new AppError("Lista de usuarios esta vazia", 2002, 404);
        }

        return retorno;
    }

    // [READ by ID] - Procedimento para buscar um único usuário por ID
    static async buscarPorId(id){
        const retorno = await UsuarioRepository.buscarPorId(id);
        if (!retorno) {
            throw new AppError("Usuário não localizado no sistema", 2003, 404);
        }

        return retorno
    }

    // [READ by Email] - Procedimento para buscar um único usuário por Email 
    static async buscarPorEmail(email){
        const retorno = await UsuarioRepository.buscarPorEmail(email);
        if (!retorno) {
            throw new AppError("Usuário não localizado no sistema", 2004, 404);
        }
        return retorno;
    }

    // [UPDATE] - Procedimento para atualizar os dados de um usuário
    static async atualizar(id, dados){
        const retorno = await UsuarioRepository.atualizar(id, dados)
        if( !retorno || retorno.changes == 0 ){
            throw new AppError("Usuário não atualizado no sistema", 2005, 404);
        }

        return null;
    }

    // [DELETE] - Procedimento para remover um usuário
    static async deletar(id){
        const retorno = await UsuarioRepository.deletar(id);
        if( !retorno || retorno.changes == 0 ){
            throw new AppError("Usuário não foi excluido do sistema", 2007, 404);
        }

        return null;
    }
}

module.exports = UsuarioService;

