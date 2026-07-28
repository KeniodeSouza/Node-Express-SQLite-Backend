/**
 * Modelo padronizado para respostas HTTP
 * @param {boolean} success - Indica se a operação deu certo (true) ou se falhou (false)
 * @param {string} message  - Mensagem descritiva
 * @param {number} code     - Codigo Interno
 * @param {any} [data=null] - Dados retornados (opcional)
 */
const ApiResponse = (success, message, data = null, code = null) => {
  return {
    success: success,
    code: code,
    message: message,
    data: data,
    timestamp: new Date().toISOString() // Formato UTC ISO (ex: 2026-07-21T12:43:47.000Z)
  };
};

module.exports = ApiResponse;
