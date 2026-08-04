const { openDb } = require('../config/database');

class UsuarioRepository {
    /*
     *  Inserir um novo registro na tabela
     */
    static async criar(dados) {
        const db = await openDb('base');
        
        try {
            // Inicia a transação
            await db.run('BEGIN TRANSACTION');
            const retorno = await db.run(
                  "INSERT INTO auth_usuario (nomeCompleto, email, telefone, senha) VALUES (?, ?, ?, ?)",
                        [dados.nomeCompleto, dados.email, dados.telefone, dados.senha ]
            );
            // Confirma as alterações
            await db.run('COMMIT');
 
            const novoDados = {
                "id": retorno.lastID, 
                "nomeCompleto": dados.nomeCompleto, 
                "email": dados.email, 
                "telefone": dados.telefone 
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
              "SELECT id, nomeCompleto, email, telefone, status, data_criacao " +
              "FROM auth_usuario " +
              "WHERE upper(nomeCompleto) not like '%ADMIN%' " +
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
              "SELECT id, nomeCompleto, email, telefone, status, data_criacao " +
              "FROM auth_usuario " +
              "WHERE upper(nomeCompleto) not like '%ADMIN%' " +
              "AND id = ?",
                [id]
        );
        
        return retorno || null;
    }

    /*
     *  Buscar um unico registro por Unique
     */
    static async buscarPorEmail(email) {
        const db = await openDb('base');

        const retorno = await db.get(
              "SELECT id, nomeCompleto, email, telefone, status, data_criacao " +
              "FROM auth_usuario " +
              "WHERE email = ?",
                [email]
        );
        
        return retorno || null;
    }

    /*
     *  Buscar as Credenciais do usuário por Unique
     */
    static async buscarCredencialPorEmail(email) {
        const db = await openDb('base');

        const retorno = await db.all(
            "SELECT DISTINCT t1.id, t1.nomeCompleto, t1.telefone, t1.senha, t4.regra " +
            "FROM auth_usuario t1 " +
                "INNER JOIN auth_usuario_perfis t2 " +
                        "ON t2.id_usuario = t1.id " +
                "INNER JOIN auth_perfil_permissoes t3 " +
                        "ON t3.id_perfil = t2.id_perfil " +
                "INNER JOIN auth_permissao t4 " +
                        "ON t4.id = t3.id_permissao " +
            "WHERE email = ? ORDER BY t4.regra ASC",
              [email]
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
                  "UPDATE auth_usuario " + 
                     "SET nomeCompleto = ?, telefone = ? WHERE id = ?",
                                [dados.nomeCompleto, dados.telefone, id]
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
     *  Atualizar a senha de um determinado usuario por Unique
     */
    static async atualizarSenha(email, senha) {
        const db = await openDb('base');

        try {
            // Inicia a transação
            await db.run('BEGIN TRANSACTION');
            const retorno = await db.run(
                  "UPDATE auth_usuario " + 
                    "SET senha = ? WHERE email = ?",
                            [senha, email]
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
                  "DELETE FROM auth_usuario " + 
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

module.exports = UsuarioRepository;
