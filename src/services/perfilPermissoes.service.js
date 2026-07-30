/*
 *
 */
const AppError = require('../utils/AppError');

const PerfilRepository = require('../repositories/perfil.repository');
const PermissaoRepository = require('../repositories/permissao.repository');
const PerfilPermissoesRepository = require('../repositories/perfilPermissoes.repository');

class PerfilPermissoesService {

    // [CREATE] - Procedimento de associar perfil a permissoes
    static async criarPermissoes(id, lista){
        const retorno = await PerfilPermissoesRepository.criarPerfis(id, lista);

        return null;
    }

    // [READ] - Procedimento de listar associacoes de perfil com permissões
    static async buscarPermissoesPorPerfil(id){
        const retorno = await PerfilRepository.buscarPorId(id);
        if (!retorno) {
            throw new AppError("Perfil não existe", 2001, 404);
        }

        const list1 = await PerfilPermissoesRepository.buscarPermissoesPorPerfil(id);
        if (!list1) {
            throw new AppError("Lista de Permissões esta vazia", 2002, 404);
        }

        // Criamos um Set com os IDs presentes na list1 para busca rápida O(1)
        const idsList1 = new Set(list1.map(item => item.id_permissao));
        const list2 = await PermissaoRepository.listarTodos();
        if (!list2) {
            throw new AppError("Lista de associação de Perfils esta vazia", 2002, 404);
        }
        
        // Mapeamos a list2 adicionando a propriedade 'isConectado' para true/false
        const listResult = list2.map(item => ({...item, isConectado: idsList1.has(item.id)}));

        return { perfil: retorno, permissoes: listResult } || null;
    }

}

module.exports = PerfilPermissoesService;

