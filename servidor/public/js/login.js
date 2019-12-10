// function login() {
//     var valor_email = email_login.value;
//     var valor_senha = senha_login.value;

//     if (valor_email == "smartparking@contato.com.br" && valor_senha == "1234567") {
//         alert("Usuário correto");
//         window.location.href = "../dashboard.smartparking/dashboard.html";
//     } else {
//         if (valor_email != "smartparking@contato.com.br" && valor_senha != "1234567") {
//             mensagem.innerHTML = "Usuário não existe";
//         } else {
//             mensagem.innerHTML = "Usuário ou senha incorreto";
//         }
//     }
// }


//  logar usuario;

let login = document.querySelector("#login");


login.addEventListener('click', () => {
    // email = document.querySelector("#email_login").value;
    senha = document.querySelector("#senha_login").value;

    if (senha == 'geracaofutura') {
        window.location.href = "/dashboard";
    } else {
        alert("usuario não existe!");
    }
    // $.ajax({
    //     url: "/logar",
    //     type: "POST",
    //     dataType: "HTML",
    //     data: { email_user: email, senha_user: senha },
    //     success: (dados) => {
    //         if (dados == "Usuário ou senha inválidos!") {
    //             alert("usuario não existe!");
    //         } else {
    //             window.location.href = "/dashboard";
    //         }
    //     },
    //     error: (erro) => {
    //         console.error(erro);
    //     }
    // });
});