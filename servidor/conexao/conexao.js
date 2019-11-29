var Sequelize = require('sequelize');
var sequelize = new Sequelize('bdgrupo6b', 'usergrupo6b', '#Gfgrupo6b', {
    host: 'srvgrupo6b.database.windows.net',
    dialect: 'mssql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        options: {
            encrypt: true,
        }
    }
});

sequelize.authenticate().then(() => {
    console.log("conectado");
}).catch((erro) => {
    console.error(erro);
});


module.exports = { Sequelize: Sequelize, sequelize: sequelize }