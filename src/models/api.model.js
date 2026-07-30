/**
 * Modelo padronizado para respostas HTTP
 * @param {boolean} success - Indica se a operação deu certo (true) ou se falhou (false)
 * @param {string}  message  - Mensagem descritiva
 * @param {any} [data=null] - Dados retornados (opcional)
 * @param {number} code [code=null] - Codigo Interno (opcional)
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
