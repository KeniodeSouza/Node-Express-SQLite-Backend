/*
 *
 */
const AppError = require('../utils/AppError');

const UsuarioRepository = require('../repositories/usuario.repository');
const PerfilRepository = require('../repositories/perfil.repository');
const UsuarioPerfisRepository = require('../repositories/usuarioPerfis.repository');

class UsuarioPerfisService {

    // [CREATE] - Procedimento associar usuario ao perfil
    static async criarPerfis(id, lista){
        const retorno = await UsuarioPerfisRepository.criarPerfis(id, lista);

        return null;
    }

    // [READ] - Procedimento para listar todos os perfis por Usuario(id)
    static async buscarPerfisPorUsuario(id){
        const retorno = await UsuarioRepository.buscarPorId(id);
        if (!retorno) {
            throw new AppError("Usuário não existe", 2001, 404);
        }
        const { senha, ...usuario } = retorno;

        const list1 = await UsuarioPerfisRepository.buscarPerfisPorUsuario(id);
        if (!list1) {
            throw new AppError("Lista de associação de Perfis esta vazia", 2002, 404);
        }

        // Criamos um Set com os IDs presentes na list1 para busca rápida O(1)
        const idsList1 = new Set(list1.map(item => item.id_perfil));

        const list2 = await PerfilRepository.listarTodos();
        if (!list2) {
            throw new AppError("Lista de perfil esta vazia", 2002, 404);
        }

        // Mapeamos a list2 adicionando a propriedade 'isConectado' para true/false
        const listResult = list2.map(item => ({...item, isConectado: idsList1.has(item.id)}));

        return { usuario: usuario, perfis: listResult } || null;
    }

}

module.exports = UsuarioPerfisService;

