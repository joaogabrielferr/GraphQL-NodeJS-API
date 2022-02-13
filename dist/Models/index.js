const sequelizeDB = require('../db-config/sequelize');
const SequelizeDB = require('sequelize');
const Produtos = require('./Produtos');
const produtosDB = Produtos(sequelizeDB, SequelizeDB.DataTypes);
const db = {
    produtosDB,
    sequelizeDB
};
module.exports = db;
//# sourceMappingURL=index.js.map