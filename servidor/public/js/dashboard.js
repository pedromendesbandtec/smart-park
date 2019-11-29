var x = 1600

function repeticao() {
    document.getElementById('valor').innerHTML = x;
}

setInterval(() => {
    x = x + 10;
    repeticao();
}, 7000);

function iniciar() {
    repeticao()
}
window.onload = iniciar()


google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Label', 'value'],
        ['Automóveis', 0],
        // ['Motos', 0],
    ]);

    var options = {
        width: 400,
        height: 250,
        redFrom: 1,
        redTo: 3,
        // greenFrom: 4,
        // greenTo: 6,
        yellowFrom: 7,
        yellowTo: 9,
        minorTicks: 5,
        min: 0,
        max: 10
    };

    var chart = new google.visualization.Gauge(document.getElementById('div_grafico'));

    chart.draw(data, options);


    function buscar_dados() {
        setTimeout(() => {
            $.ajax({
                url: "/dados_arduino",
                type: "POST",
                dataType: "HTML",
                success: (dados) => {
                    dado = parseInt(dados);
                    atualizar_dados(dado);
                },
                error: () => {
                    console.error(erro);
                }
            });
        }, 500);
    }

    buscar_dados();

    function atualizar_dados(dado) {
        data.setValue(0, 1, dado);
        chart.draw(data, options);
        buscar_dados();
    }

}