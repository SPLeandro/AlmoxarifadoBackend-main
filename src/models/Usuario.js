const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');

const Empresa = require('../models/Empresa');

const Usuario = sequelize.define("Usuarios", {
    CPF: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(11)
    },
    
    NOME: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
            len: [3, 255]
        }
    },

    LOGIN: {
        allowNull: false,
        type: Sequelize.STRING(20),
        validate: {
            len: [3, 20]
        },
        unique: true, 
    },
    
    SENHA: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
            len: [8, 255]
        }
    },

    /*

    COD_EMPRESA: {
        allowNull: false,
        type: Sequelize.INTEGER,

        REFERENCES: {
            model: "Empresas",
            key: "COD_EMPRESA",
        }
        
    },   
    
    */
    
    dataNascimento: {
        allowNull: false,
        type: Sequelize.DATE()
    },
});

Empresa.hasMany(Usuario, {foreignKey: 'COD_EMPRESA'});
 
module.exports = Usuario;