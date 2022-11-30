const Sequelize = require('sequelize');

const connection = new Sequelize('projeto1_formNode', 'root', 'Apolo13062020!', {
    host:'localhost',
    dialect: 'mysql'
});

module.exports = connection