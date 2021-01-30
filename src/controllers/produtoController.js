const Produto = require('../models/Produto');
const status = require('http-status');
const { Op } = require("sequelize");

module.exports = {
    
    async Index(req, res, next ){
        //const { page = 1 } = request.query;

        const COD_EMPRESA = req.headers.cod_empresa;
        Produto.findAll({
            limit:10,
            where:{
                COD_EMPRESA: COD_EMPRESA
            }})

        .then(cliente => {
            if (cliente) {
                res.status(status.OK).send(cliente);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
    },

    async Detail(req, res, next ){

        const {prod} = req.params;
        const COD_EMPRESA = req.headers.cod_empresa;

        Produto.findAll({
            limit:10,
            where: {
                DESCR: {[Op.substring] : prod},
                COD_EMPRESA: COD_EMPRESA
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

    },
    

    async Insert (req, res, next){
        const {DESCR, REF, MARCA, IMG, MED} = req.body;
        const COD_EMPRESA = req.headers.cod_empresa;

        console.log(COD_EMPRESA);

        Produto.create({
            COD_EMPRESA,
            DESCR,
            REF,
            MARCA,
            IMG,
            MED
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

    async Update(req, res, next){
        const {COD_PRODUTO, DESCR, REF, MARCA, IMG, MED} = req.body;
        const COD_EMPRESA  = req.headers.cod_empresa;
        console.log(COD_EMPRESA);
        Produto.update({COD_EMPRESA, DESCR, REF, MARCA, IMG, MED}, {where: {COD_PRODUTO}})
        .then(response => {
            if (response) {
                res.status(status.OK).send(response);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
    },


    async IncreaseQtd(req, res, next ){
        const {COD_PRODUTO, QTD} = req.body;
        const COD_EMPRESA  = req.headers.cod_empresa;

        let response = await Produto.findAll({
            attributes: ['QTD'],
            where:{
                COD_PRODUTO,
                COD_EMPRESA
            }
        })
        response = response[0].dataValues.QTD;

        let total;

        if (response >= 0 ){
            total = Number(response) + Number(QTD);
        } else {
            total = QTD;
        }

        
        Produto.update({QTD: total}, {where: {COD_PRODUTO, COD_EMPRESA}})
        .then(response => {
            if (response) {
                res.status(status.OK).send(response);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
    }
}