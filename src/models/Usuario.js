const { DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

const Empresa = require('../models/Empresa');

const Usuario = sequelize.define("Usuarios", {
    CPF: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING(11)
    },
    
    NOME: {
        allowNull: false,
        type: DataTypes.STRING(255),
        validate: {
            len: [3, 255]
        }
    },

    LOGIN: {
        allowNull: false,
        type: DataTypes.STRING(20),
        validate: {
            len: [3, 20]
        },
        unique: true, 
    },
    
    SENHA: {
        allowNull: false,
        type: DataTypes.STRING(255),
        validate: {
            len: [8, 255]
        }
    },

    /*

    COD_EMPRESA: {
        allowNull: false,
        type: DataTypes.INTEGER,

        REFERENCES: {
            model: "Empresas",
            key: "COD_EMPRESA",
        }
        
    },   
    
    */
    
    dataNascimento: {
        allowNull: false,
        type: DataTypes.DATE()
    },
});

Empresa.hasMany(Usuario, {foreignKey: 'COD_EMPRESA'});
 
module.exports = Usuario;