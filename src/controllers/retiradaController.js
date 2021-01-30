const Retirada = require('../models/Retirada');
const status = require('http-status');

const Produto = require('../models/Produto');

module.exports = {
    
    async Insert(req, res, next){
        const {CPF, COD_PRODUTO, NOME_REC, EMPRESA_REC, SETOR_REC, QTD } = req.body;
        const COD_EMPRESA = req.headers.cod_empresa;

        console.log(req.body);
        console.log(COD_EMPRESA);

        let currentQtd = await Produto.findAll({
            attributes: ['QTD'],
            where:{
                COD_PRODUTO,
                COD_EMPRESA
            }
        })
        currentQtd = currentQtd[0].dataValues.QTD;

        let total = Number(currentQtd) - Number(QTD);
        
        Produto.update({QTD: total}, {where: {COD_PRODUTO, COD_EMPRESA}})
        .then(response => {
            if (response) {
                Retirada.create({
                    CPF,
                    COD_PRODUTO,
                    EMPRESA_REC,
                    NOME_REC,
                    SETOR_REC,
                    QTD,
                    MED : "0"
                })
        
                .then(cliente => {
                    if (cliente) {
                        res.status(status.OK).send(cliente);
                    } else {                        
                        res.status(status.NOT_FOUND).send();
                    }
                })
                .catch(error => {
                    console.log('passou aqui')
                    Produto.update({QTD: currentQtd}, {where: {COD_PRODUTO, COD_EMPRESA}});
                    next(error)
                });
            } else {
                
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => {
            next(error)
        });     

    },
}