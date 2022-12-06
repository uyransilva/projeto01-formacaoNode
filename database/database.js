const Sequelize = require('sequelize');

module.exports.connection = new Sequelize('projeto1_formNode', 'root', 'Apolo13062020!', {
    host:'localhost',
    dialect: 'mysql'
});
// finalizado