function analisar() {
    mensagem.innerHTML = '';

    var new_senha = n_sen.value;
    var conf_senha = c_sen.value;

    if (new_senha == conf_senha) {
        mensagem.innerHTML = ("Senha enviada ao e-mail com sucesso!");
    } else {
        mensagem.innerHTML = ("As senhas precisam ser iguais!");
    }
}