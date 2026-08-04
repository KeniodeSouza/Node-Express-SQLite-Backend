const { openDb } = require('../config/database');

class PerfilRepository {
    /*
     *  Inserir um novo registro na tabela
     */
    static async criar(dados) {
        const db = await openDb('base');

        try {
            // Inicia a transação
            await db.run('BEGIN TRANSACTION');
            const retorno = await db.run(
                  "INSERT INTO auth_perfil (nome, descricao) " +
                  "VALUES (?, ?)",
                  [dados.nome, dados.descricao ]
            );
            // Confirma as alterações
            await db.run('COMMIT');

            const novoDados = {
                "id": retorno.lastID,
                "nome": dados.nome,
                "descricao": dados.descricao
            };
            // Retorna o objeto recebido concatenado com o id gerado no banco
            return novoDados;
        } catch (error) {
            // Desfaz as alterações em caso de erro
            await db.run('ROLLBACK');
            throw error;
        }
    }

    /*
     *  Listar todos os registros da tabela
     */
    static async listarTodos() {
        const db = await openDb('base');

        const retorno = await db.all(
              "SELECT * " +
              "FROM auth_perfil " +
              "WHERE upper(nome) not like '%ADMIN%' " +
              "ORDER BY id ASC"
        );

        return retorno || null;
    }

    /*
     *  Buscar um unico registro por ID
     */
    static async buscarPorId(id) {
        const db = await openDb('base');

        const retorno = await db.get(
              "SELECT * " +
              "FROM auth_perfil " +
              "WHERE upper(nome) not like '%ADMIN%' " +
              "AND id = ?",
              [id]
        );

        return retorno || null;
    }

    /*
     *  Buscar um unico registro por Unique
     */
    static async buscarPorNome(nome) {
        const db = await openDb('base');

        const retorno = await db.get(
              "SELECT * " +
              "FROM auth_perfil " +
              "WHERE nome = ?",
              [nome]
        );

        return retorno || null;
    }

    /*
     *  Atualizar um unico registro da tabela
     */
    static async atualizar(id, dados) {
        const db = await openDb('base');

        try {
            // Inicia a transação
            await db.run('BEGIN TRANSACTION');
            const retorno = await db.run(
                  "UPDATE auth_perfil " +
                  "SET descricao = ? WHERE id = ?",
                  [dados.descricao, id]
            );
            // Confirma as alterações
            await db.run('COMMIT');

            return retorno;
        } catch (error) {
            // Desfaz as alterações em caso de erro
            await db.run('ROLLBACK');
            throw error;
        }

    }

    /*
     *  Excluir um unico registro da tabela
     */
    static async deletar(id) {
        const db = await openDb('base');

        try {
            // Inicia a transação
            await db.run('BEGIN TRANSACTION');
            const retorno = await db.run(
                  "DELETE FROM auth_perfil " +
                  "WHERE id = ?",
                  [id]
            );
            // Confirma as alterações
            await db.run('COMMIT');

            return retorno;
        } catch (error) {
            // Desfaz as alterações em caso de erro
            await db.run('ROLLBACK');
            throw error;
        }
    }
}

module.exports = PerfilRepository;
