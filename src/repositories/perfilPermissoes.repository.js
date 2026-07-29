const { openDb } = require('../config/database');

class PerfilPermissoesRepository {
    /*
     *  Buscar as Permissoes por id do Perfil
     */
    static async buscarPermissoesPorPerfil(id) {
        const db = await openDb('base');

        const retorno = await db.all(
                "SELECT id_perfil, id_permissao " +
                "FROM auth_perfil_permissoes " +
                "WHERE upper(descricao) not like '%ADMIN%' " +
                "AND id_perfil = ? " +
                "ORDER BY id_permissao ASC",
                [id]
        );

        return retorno || null;
    }
  
    /*
     *  Incluir multiplos registros de associação de Perfil com Permissao
     *  id (number) - Id do Perfil
     *  list (array) - [{idPermissao: , descricao: },...]
     */
    static async criarPerfis(id, lista) {
        const db = await openDb('base');

        try {
            // Inicia a transação
            await db.run('BEGIN TRANSACTION');

            // DELETE: Remove as associações anteriores do usuário
            await db.run('DELETE FROM auth_perfil_permissoes WHERE id_perfil = ?', [id]);

            // INSERT: Se houver itens na lista, faz a inserção em lote (1 único comando)
            // Cria os placeholders dinâmicos: "(?, ?, ?), (?, ?, ?), ..."
            const placeholders = lista.map(() => '(?, ?, ?)').join(', ');
            const sql = `INSERT INTO auth_perfil_permissoes (id_perfil, id_permissao, descricao) VALUES ${placeholders}`;

            // Achata a lista de parâmetros para corresponder aos '?'
            const params = lista.flatMap(item => [id, item.idPermissao, item.descricao || null]);

            await db.run(sql, params);

            // Confirma as alterações
            await db.run('COMMIT');

            return { success: true, count: lista ? lista.length : 0 };
        } catch (error) {
            // Desfaz as alterações em caso de erro
            await db.run('ROLLBACK');
            throw error;
        }
    }
}

module.exports = PerfilPermissoesRepository;
