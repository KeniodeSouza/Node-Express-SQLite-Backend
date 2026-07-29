const { openDb } = require('../config/database');

class UsuarioRepository {
    static async criar(dados) {
        const db = await openDb('base');

        const retorno = await db.run(
              "INSERT INTO auth_usuario (nomeCompleto, email, telefone, senha) VALUES (?, ?, ?, ?)",
              [dados.nomeCompleto, dados.email, dados.telefone, dados.senha ]
        );
     
        const novoDados = {
            "id": retorno.lastID, 
            "nomeCompleto": dados.nomeCompleto, 
            "email": dados.email, 
            "telefone": dados.telefone 
        };
        
        // Retorna o objeto recebido concatenado com o id gerado no banco
        return retorno ? novoDados : null;
    }

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

    static async buscarPorId(id) {
        const db = await openDb('base');

        const retorno = await db.get(
              "SELECT * " +
              "FROM auth_usuario " +
              "WHERE upper(nomeCompleto) not like '%ADMIN%' " +
              "AND id = ?",
              [id]
        );
        
        return retorno || null;
    }

    static async buscarPorEmail(email) {
        const db = await openDb('base');

        const retorno = await db.get(
              "SELECT * " +
              "FROM auth_usuario " +
              "WHERE email = ?",
              [email]
        );
        
        return retorno || null;
    }

    static async buscarCredencialPorEmail(email) {
        const db = await openDb('base');

        const retorno = await db.all(
            "SELECT DISTINCT t1.id, t1.nomeCompleto, t1.telefone, t1.senha, t4.regra " +
            "FROM auth_usuario t1 " +
            "INNER JOIN auth_usuario_perfis t2 ON t2.id_usuario = t1.id " +
            "INNER JOIN auth_perfil_permissoes t3 ON t3.id_perfil = t2.id_perfil " +
            "INNER JOIN auth_permissao t4 ON t4.id = t3.id_permissao " +
            "WHERE email = ? ORDER BY 3 ASC",
              [email]
        );

        return retorno || null;
    }

    static async atualizar(id, dados) {
        const db = await openDb('base');

        const retorno = await db.run(
              "UPDATE auth_usuario SET nomeCompleto = ?, telefone = ? WHERE id = ?",
              [dados.nomeCompleto, dados.telefone, id]
        );

        return retorno;
    }

    static async resetPassword(email, senha) {
        const db = await openDb('base');

        const retorno = await db.run(
              "UPDATE auth_usuario SET senha = ? WHERE email = ?",
              [senha, email]
        );
        return retorno;
    }


    static async deletar(id) {
        const db = await openDb('base');

        const retorno = await db.run(
              "DELETE FROM auth_usuario WHERE id = ?",
              [id]
        );

        return retorno;
    }

    /*
     *  Inclui multiplos registros na tabela de associação Usuario e Perfil
     *  id (number) - Id do Usuario
     *  list (array) - [[ idPerfil: , descricao: },...] 
     */
    static async associate(id, list) {
        const db = await openDb('base');

        // Gera as interrogações: "(?, ?, ?), (?, ?, ?), ..."
        const placeholders = list.map(() => '(?, ?, ?)').join(', ');
        const sql = `INSERT INTO auth_usuario_perfis (id_usuario, id_perfil, descricao) VALUES ${placeholders}`;

        // Array de parâmetros: [id, perfil1, desc1, id, perfil2, desc2, ...]
        const params = list.flatMap(item => [ id,  item.id_perfil, item.descricao || null ]);

        const retorno = await db.run(sql, params);
        return retorno;
    }
}

module.exports = UsuarioRepository;
