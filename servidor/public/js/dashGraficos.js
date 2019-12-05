google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'percentage'],
        ['A7', 13],
        ['A8', 10],
        ['C3', 12],
        ['F2', 21],
        ['G8', 7]
    ]);

    var options = {
        title: 'Vagas mais usadas',
        fontSize: 18,
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
}