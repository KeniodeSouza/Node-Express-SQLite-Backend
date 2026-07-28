class AuthData {
  /**
   * @param {string} params.email
   * @param {string} params.nomeCompleto
   * @param {string} params.telefone
   * @param {string} params.token
   * @param {Array<string>} params.permissoes
   */
  constructor({ email, nomeCompleto, telefone, token, permissoes = [] }) {
    this.email = email;
    this.nomeCompleto = nomeCompleto;
	this.telefone = telefone;
    this.token = token;
    this.permissoes = permissoes;
  }
}

module.exports = AuthData;