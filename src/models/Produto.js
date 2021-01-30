const { DataTypes } = require('sequelize')
const sequelize = require('../database/database');

const Empresa = require('./Empresa');

const Produto = sequelize.define("Produtos", {
    
    COD_PRODUTO: {  
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
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
        type: DataTypes.STRING(255)
    },

	REF: {
        type: DataTypes.STRING(255)
    },

	MARCA: {
        type: DataTypes.STRING(255)
    },

	MED: {
        type: DataTypes.STRING(255)
    },

	QTD: {
        type: DataTypes.FLOAT
    },
});

Empresa.hasMany(Produto, {foreignKey: 'COD_EMPRESA'});

module.exports = Produto;