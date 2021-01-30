const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Empresa = require('./Empresa');

const Produto = sequelize.define("Produtos", {
    
    COD_PRODUTO: {  
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },

        // INSERIR PROP AREA
    //CRIAR TABELA DAS AREAS

    /*

	COD_EMPRESA: {
        allowNull: false,
        type: Sequelize.INTEGER,

        REFERENCES: {
            model: "Empresas",
            key: "COD_EMPRESA"
        } 
    },

    COD_EMPRESA: {
        allowNull: false,
        type: Sequelize.INTEGER,

        REFERENCES: {
            model: "Empresas",
            key: "COD_EMPRESA",
        }
        
    },

    */
    
	DESCR: {
        allowNull: false,
        unique: true, 
        type: Sequelize.STRING(255)
    },

	REF: {
        type: Sequelize.STRING(255)
    },

	MARCA: {
        type: Sequelize.STRING(255)
    },

	MED: {
        type: Sequelize.STRING(255)
    },

	QTD: {
        type: Sequelize.FLOAT
    },
});

Empresa.hasMany(Produto, {foreignKey: 'COD_EMPRESA'});

module.exports = Produto;