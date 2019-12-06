const express = require("express");
const handlebars = require("express-handlebars");
const session = require("express-session");
const bodyparser = require("body-parser");
const path = require("path");
const login = require("./models/login");
//const dados_arduino = require("./models/dados_arduino");
const app = express();
const port = 8080;


// template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// body-parser;
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(session({
    'secret': '847840438384'
}));

app.post("/logar", (req, res) => {
    email = req.body.email_user;
    senha = req.body.senha_user;
    login(email, senha).then((result) => {
        if (result.length == 0) {
            res.send("Usuário ou senha inválidos!");
        } else {
            req.session.id = result.id_usuario;
            req.session.nome = result.nome_usuario;
            req.session.email = result.email_usuario;
            req.session.senha = result.senha_usuario;
            res.send("existe");
        }
    })
});

//app.post("/dados_arduino", (req, res) => {
//    dados_arduino().then(result => res.send(result));
//});

app.use(express.static(path.join(__dirname + "/public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/novasenha", (req, res) => {
    res.render("novasenha");
});

app.get("/dashboard", (req, res) => {
    res.render("dashboard");
});

app.get("/dashboard/graficos", (req, res) => {
    res.render("dashGraficos");
});

app.get("/dashboard/perfil", (req, res) => {
    res.render("dashPerfil");
});

app.get("/dashboard/suporte", (req, res) => {
    res.render("dashSuporte");
});

app.listen(port, () => {
    console.log(`rodando ${port}`);
});
