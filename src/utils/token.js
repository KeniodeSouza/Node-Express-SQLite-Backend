const jwt = require('jsonwebtoken');

// Chave secreta que APENAS o seu servidor deve saber. 
// No mundo real, guarde isso em um arquivo .env
// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
const SECRET_KEY = "MinhaFraseSecretaSuperProtegida_2026#TokenJWT!";

/**
 * Gera um JWT para um usuário
 * @param {Object} user - Objeto com os dados do usuário (id, email, etc.)
 * @returns {string} Token JWT gerado
 */
function gerarToken(data) {
  // Dados que você quer que fiquem guardados dentro do token
  const payload = {
    id: data.id,
    email: data.email,
    role: data.senha || 'passwrd'
  };

  // Opções do token (como tempo de expiração)
  const options = {
    expiresIn: '8h' // O token vai expirar automaticamente em 8 horas
  };

  // Gera e retorna o token assinado com a sua chave secreta
  return jwt.sign(payload, SECRET_KEY, options);
}

module.exports = { gerarToken };
