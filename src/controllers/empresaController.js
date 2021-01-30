const tableEmpresa = require('../models/Empresa');
const status = require('http-status');
const { Index } = require('./produtoController');

module.exports = {

    async Index(req, res, next){
        const empresas = await tableEmpresa.findAll()
        .then(empresa => {
            if (empresa) {
                res.status(status.OK).send(empresa);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));

    },

    async Insert (req, res, next) {

        const newEmpresa = req.body.empresa;

        tableEmpresa.create({
            EMPRESA: newEmpresa,
        })

        .then(empresa => {
            if (empresa) {
                res.status(status.OK).send(empresa);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));

    }
}