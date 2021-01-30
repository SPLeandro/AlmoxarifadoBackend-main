const Sequelize = require('Sequelize');
const sequelize = require ('../database/database');

const Produto = require('./Produto');
const Empresa = require('./Empresa');
const Usuario = require('./Usuario');

const Retirada = sequelize.define("Retiradas", {

    COD_RETIRADA: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,           
    },  

    CPF: {
        allowNull: false,
        type: Sequelize.STRING(11),
        
        REFERENCES: {
            Model: "Usuarios",
            key: "CPF"
        } // FOREIGN KEY REFERENCES Usuarios(CPF)
        
    },

    COD_PRODUTO: {
        allowNull: false,
        type: Sequelize.INTEGER,

        REFERENCES: {
            Model: "Produtos",
            key: "COD_PRODUTO",
        } // FOREIGN KEY REFERENCES Produtos(COD_PRODUTO)
    },

    EMPRESA_REC: {
        allowNull: false,
        type: Sequelize.INTEGER,

        REFERENCES: {
            Model: "Empresas",
            key: "COD_EMPRESA"
        } // FOREIGN KEY REFERENCES Empresas(COD_EMPRESA)
    },

    NOME_REC: {
        allowNull: false,
        type: Sequelize.STRING(255),
    },

    SETOR_REC: {
        allowNull: false,
        type: Sequelize.STRING(255),
    },

    QTD: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

}, {
    updatedAt: false,
});

Usuario.hasMany(Retirada, {foreignKey: 'CPF'});
Produto.hasMany(Retirada, {foreignKey: 'COD_PRODUTO'});
Empresa.hasMany(Retirada, {foreignKey: 'EMPRESA_REC'});

module.exports =  Retirada;