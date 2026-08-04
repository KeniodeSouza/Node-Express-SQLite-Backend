/*
 *
 */
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

const AppError = require('../utils/AppError');
const UsuarioRepository = require('../repositories/usuario.repository');

const app = express();
app.use(express.json()); // Permite que o Express leia JSON no corpo das requisições

// Configuração do transportador do Nodemailer (Docker)
const transporter_local = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // Não precisa de SSL/TLS para teste local
    auth: null     // Mailpit não exige autenticação por padrão
});

// Configuração do transportador do Nodemailer (Gmail)
const transporter_server = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true para porta 465, false para outras portas (como 587)
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

class AuthService {
    /*
     *  [READ] - Busca as credenciais de Autorização:
     *      @param {string} - email 
     *      @param {string} - senha
     */
    static async buscarCredencial(email, senha){
        const list = await UsuarioRepository.buscarCredencialPorEmail(email);
        if (!list || list.length === 0) {
            throw new AppError("Usuário não localizado", 2001, 404);
        }
        // CRIPTOGRAFIA: Gera o hash da senha com um fator de custo 10
        const senhaCrypt = senha // await bcrypt.hash(senha, 10);

        if( list[0].senha != senhaCrypt ){ 
            throw new AppError("Senha esta invalida.", 2002, 404);
        }

        const retorno = {
            id: list[0].id,
            email: email,
            nomeCompleto: list[0].nomeCompleto,
            telefone: list[0].telefone,
            permissoes: list.map(item => item.regra) // Extrai todas as regras num array simples
        };

        return retorno;
    }
    
    /*
     *  [UPDATE] - Método atualiza a senha do usuario
     *      @param {string} - email 
     *      @param {string} - senha
     */
    static async atualizarSenha(email, senha ){
        // CRIPTOGRAFIA: Gera o hash da senha com um fator de custo 10
        const senhaCrypt = senha // await bcrypt.hash(senha, 10);

        const retorno = await UsuarioRepository.atualizarSenha(email, senhaCrypt)
        if( !result ){
            throw new AppError("Usuário não modou a Senha", 2003, 404);
        }

        return retorno;
    }

    /*
     * [NODEMAILER] - Procedimento envio de email para servidor
     *      @param {string} para    - Destinatário para a mensagem
     *      @param {string} Assunto - Descrição resumido do email
     *      @param {string} texto   - Texto de composicao do email
     */
    static async enviarEmail(para, assunto, texto){
        try {
            // Envia o e-mail
            const info = await transporter_local.sendMail({
                                from: process.env.EMAIL_USER,               // Remetente
                                to: para,                                   // Destinatário
                                subject: assunto,                           // Assunto
                                text: texto,                                // Corpo em texto puro
                                html: null,                                 // Corpo em HTML (opcional)
            });
            return 'sendMail: Enviado com sucesso. messageId:' + info.messageId;

        } catch(error) {
            throw new AppError("sendMail: Erro ao enviar e-mail. Error:"+error, 2004, 404);
        }
    }
};

module.exports = AuthService;
