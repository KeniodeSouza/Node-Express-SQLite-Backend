const { openDb } = require('../config/database');

class UsuarioPerfisRepository {
    /*
     *  Listar os Perfis por usuario
     */
    static async buscarPerfisPorUsuario(id) {
        const db = await openDb('base');

        const retorno = await db.all(
                "SELECT id_usuario, id_perfil " + 
                "FROM auth_usuario_perfis " +
                "WHERE upper(descricao) not like '%ADMIN%' " +
                "AND id_usuario = ? " +
                "ORDER BY id_perfil ASC",
                [id]
        );

        return retorno || null;
    }

    /*
     *  Inclui multiplos registros na tabela de associação Usuario e Perfil
     *  id (number) - Id do Usuario
     *  lista (array) - [[ idPerfil: , descricao: },...] 
     */
    static async criarPerfis(id, lista) {
        const db = await openDb('base');
        // if (list && list.length > 0) {   }

        try {
            // Inicia a transação
            await db.run('BEGIN TRANSACTION');

            // DELETE: Remove as associações anteriores do usuário
            await db.run('DELETE FROM auth_usuario_perfis WHERE id_usuario = ?', [id]);

            // INSERT: Se houver itens na lista, faz a inserção em lote (1 único comando)
            // Cria os placeholders dinâmicos: "(?, ?, ?), (?, ?, ?), ..."
            const placeholders = lista.map(() => '(?, ?, ?)').join(', ');
            const sql = `INSERT INTO auth_usuario_perfis (id_usuario, id_perfil, descricao) VALUES ${placeholders}`;

            // Achata a lista de parâmetros para corresponder aos '?'
            const params = lista.flatMap(item => [id, item.idPerfil, item.descricao || null]);

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

module.exports = UsuarioPerfisRepository;
