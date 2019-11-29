google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'percentage'],
        ['B3', 7],
        ['B5', 15],
        ['D1', 11],
        ['D2', 12],
        ['E3', 6],
        ['H5', 17],
        ['H6', 6],
        ['I8', 8],
        ['I9', 5],
        ['I10', 13]
    ]);

    var options = {
        title: 'Vagas menos usadas',
        fontSize: 18,
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d2'));
    chart.draw(data, options);
}