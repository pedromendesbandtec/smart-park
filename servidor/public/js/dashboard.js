ocu = document.querySelector("#ocu");
grafico_cor = document.querySelector(".grafico_cor");
liv = document.querySelector("#liv");

function buscar_dados() {
    setTimeout(() => {
        $.ajax({
            url: "/dados_arduino",
            type: "POST",
            dataType: "HTML",
            success: (dados) => {
                atualizar_dados(dados);

            },
            error: () => {
                console.error(erro);
            }
        });
    }, 500);
}

buscar_dados();

function atualizar_dados(dado) {
    ocu.innerHTML = `<center style="color: red; margin-top: 10px">${dado}</center>`;
    if (dado == 1) {
        liv.innerHTML = '<center style="color: green; margin-top: 10px">99</center>';
        grafico_cor.style.display = "block";
    } else {
        liv.innerHTML = '<center style="color: green; margin-top: 10px">100</center>';
        grafico_cor.style.display = "none";
    }
    buscar_dados();
}

var x = 1600

function repeticao() {
    document.getElementById('valor').innerHTML = x;
}

setInterval(() => {
    x = x + 15;
    repeticao();
}, 15000);

window.onload = repeticao()