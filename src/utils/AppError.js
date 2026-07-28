// AppError.js
class AppError extends Error {
    constructor(message, internalCode = null, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;       // Ex: 400, 404, 500
        this.internalCode = internalCode;   // Ex: 1001, 1002
    }
}

module.exports = AppError;