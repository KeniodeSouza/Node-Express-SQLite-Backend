const PessoaModel = ( id, email, nomeCompleto, telefone = null, status = 'Ativo') => {
    return {
		id: Number(id),
		email: email,
		nomeCompleto: nomeCompleto,
		telefone: telefone,
		status: status
  }
}

module.exports = PessoaModel;

/*
Exemplo de uso:

Passando todos os dados:

const pessoaNew = PessoaModel( 1, 'ana@email.com', 'Ana Silva', '11999999999', 'Inativo' );
*/
