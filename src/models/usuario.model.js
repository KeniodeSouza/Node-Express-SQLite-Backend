/**
 * Modelo padronizado para usuario
 * @param {number} id  (Opcional)
 * @param {string} email  
 * @param {string} nomeCompleto
 * @param {string} telefone
 * @param {string} senha 
 */
const UsuarioModel = ( id = 0, email, nomeCompleto, telefone = null, senha = 'Senha@123' ) => {
    return {
        id: Number(id),
        email: email,
        nomeCompleto: nomeCompleto,
        telefone: telefone,
        senha: senha
    }
}

module.exports = UsuarioModel;

/*
Exemplo de uso:
const novoDado = UsuarioModel( 1, 'ana@email.com', 'Ana Silva', '(11)99999-9999', 'usuario:read' );
*/
