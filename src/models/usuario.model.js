const UsuarioModel = ( id, email, nomeCompleto, telefone = null, senha = 'Senha@123' ) => {
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

Passando todos os dados:

const novoDado = UsuarioModel( 1, 'ana@email.com', 'Ana Silva', '(11)99999-9999', 'usuario:read' );
*/
