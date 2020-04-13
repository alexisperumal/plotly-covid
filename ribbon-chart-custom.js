Plotly.d3.json('data.json', function(data) {

    var trace1 = {
        x: data[0].x,
        y: data[0].y,
        z: data[0].z,
        name: '',
        colorscale: data[0].colorscale,
        type: 'surface',
        showscale: false
    }
    var trace2 = {
        x: data[1].x,
        y: data[1].y,
        z: data[1].z,
        name: '',
        colorscale: data[1].colorscale,
        type: 'surface',
        showscale: false
    }


    var trace3 = {
        x: data[2].x,
        y: data[2].y,
        z: data[2].z,
        name: '',
        colorscale: data[2].colorscale,
        type: 'surface',
        showscale: false
    }

    var trace4 = {
        x: data[3].x,
        y: data[3].y,
        z: data[3].z,
        name: '',
        colorscale: data[3].colorscale,
        type: 'surface',
        showscale: false
    }
    var data = [trace1, trace2, trace3, trace4];


    console.log(data[3].colorscale);

    console.log(trace1)

    var layout = {
        title: 'Ribbon Plot Custom',
        showlegend: false,
        autosize: true,
        width: 600,
        height: 600,
        scene: {
            xaxis: {
                title: 'Sample #'
            },
            yaxis: {
                title: 'Tip'
            },
            zaxis: {
                title: 'Total Bill'
            }
        }
    };
    Plotly.newPlot('ribbonChartCustom', data, layout);
});