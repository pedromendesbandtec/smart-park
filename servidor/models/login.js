const conexao = require("../conexao/conexao");

const logar = (email, senha) => {
    return new Promise((resolve, reject) => {
        conexao.sequelize.query("select * from usuario where email_usuario = '" + email + "' and senha_usuario = '" + senha + "'").then((result) => {
            // console.log(result);
            resolve(result[0]);
        })
    });
}

module.exports = logar;