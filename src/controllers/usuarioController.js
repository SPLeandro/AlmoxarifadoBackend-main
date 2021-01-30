// Define a utilização do model cliente e a dependência http-status
const Usuario = require('../models/Usuario');
const status = require('http-status');

module.exports = {

    async Insert(req, res, next) {
        
        const {cpf, nome, login, senha, COD_EMPRESA, dataNascimento} = req.body;
    
        Usuario.create({
            CPF: cpf,
            NOME: nome,
            LOGIN: login,
            SENHA: senha,
            COD_EMPRESA,
            dataNascimento,
        })

        .then(cliente => {
            if (cliente) {
                res.status(status.OK).send(cliente);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        
        .catch(error => next(error));
    },

    async Auth(req, res, next){
        const {LOGIN, SENHA} = req.body;

        Usuario.findOne({
            where: {
                LOGIN,
                SENHA: SENHA
            }
        })

        .then(cliente => {
            if (cliente) { 
                res.status(status.OK).send(cliente);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        
        .catch(error => next(error));       
        
    }
}