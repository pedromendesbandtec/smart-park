function login() {
    var  valor_email = email_login.value;
    var  valor_senha = senha_login.value;

    if (valor_email == "smartparking@contato.com.br" && valor_senha == "1234567"){
        mensagem.innerHTML = "Usuário correto";
        // window.location.href = "file:///C:/Users/tosil/Desktop/smart-park/Site%20Smart-Park/index.html";
    } else {
        if (valor_email != "smartparking@contato.com.br" && valor_senha != "1234567") {
            mensagem.innerHTML = "Usuário não existe";
        } else {
            mensagem.innerHTML = "Usuário ou senha incorreto";
        }
    }
}