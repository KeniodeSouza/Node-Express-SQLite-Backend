const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

/**
 * Abre a conexão com o banco de dados SQLite especificado.
 * @param {string} dbName - Nome do arquivo do banco (ex: 'gestao', 'faturamento', 'financeiro')
 */
async function openDb(dbName = 'gestao') {
  // Constrói o caminho dinamicamente conforme o banco solicitado
  const dbPath = path.resolve(`./src/database/${dbName}.db`);

  return open({
    filename: dbPath,
    driver: sqlite3.Database
  });
}

module.exports = { openDb };
