const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Empresa = sequelize.define("Empresas", {
    COD_EMPRESA: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,

        validate: {
            len: [1, 50]
        }  
        
    },
    
	EMPRESA: {
        type: Sequelize.STRING(255),
        unique: true, 
    },
});

module.exports = Empresa;
