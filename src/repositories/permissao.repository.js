const { openDb } = require('../config/database');

class PermissaoRepository {
    /*
     *  Inserir um novo registro na tabela
     */
    static async criar(dados) {
        const db = await openDb('base');

        const retorno = await db.run(
              "INSERT INTO auth_permissao (regra, descricao) " + 
              "VALUES (?, ?)",
              [dados.regra, dados.descricao ]
        );
     
        const novoDados = {
            "id": retorno.lastID, 
            "regra": dados.regra, 
            "descricao": dados.descricao
        };
        
        // Retorna o objeto recebido concatenado com o id gerado no banco
        return retorno ? novoDados : null;
    }

    /*
     *  Listar todos os registros da tabela
     */
    static async listarTodos() {
        const db = await openDb('base');

        const retorno = await db.all(
              "SELECT * " +
              "FROM auth_permissao " +
              "WHERE upper(regra) not like '%ADMIN%' " + 
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
              "FROM auth_permissao " +
              "WHERE upper(regra) not like '%ADMIN%' " + 
              "AND id = ?",
              [id]
        );
        
        return retorno || null;
    }

    /*
     *  Buscar um unico registro por Unique
     */
    static async buscarPorNome(regra) {
        const db = await openDb('base');

        const retorno = await db.get(
              "SELECT * " +
              "FROM auth_permissao " +
              "WHERE upper(regra) not like '%ADMIN%' " + 
              "AND regra = ?",
              [regra]
        );
        
        return retorno || null;
    }

    /*
     *  Atualizar um unico registro da tabela
     */
    static async atualizar(id, dados) {
        const db = await openDb('base');

        const retorno = await db.run(
              "UPDATE auth_permissao " + 
              "SET descricao = ? WHERE id = ?",
              [dados.descricao, id]
        );

        return retorno;
    }

    /*
     *  Excluir um unico registro da tabela
     */
    static async deletar(id) {
        const db = await openDb('base');

        const retorno = await db.run(
              "DELETE FROM auth_permissao " + 
              "WHERE id = ?",
              [id]
        );

        return retorno;
    }
}

module.exports = PermissaoRepository;
