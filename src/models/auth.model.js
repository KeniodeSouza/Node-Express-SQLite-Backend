/**
 * @param {string} email
 * @param {string} nomeCompleto
 * @param {string} telefone
 * @param {string} token
 * @param {Array<string>} permissoes
 */
class AuthData {
  constructor({ email, nomeCompleto, telefone, token, permissoes = [] }) {
    this.email = email;
    this.nomeCompleto = nomeCompleto;
    this.telefone = telefone;
    this.token = token;
    this.permissoes = permissoes;
  }
}

module.exports = AuthData;