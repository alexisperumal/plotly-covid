// Alexis Perumal, 4/6/20
// https://plotly.com/javascript/ribbon-plots/

let ribbon_example_url = 'https://raw.githubusercontent.com/plotly/datasets/master/3d-ribbon.json'
let usStatesURL_CSV = "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv";

Plotly.d3.json(ribbon_example_url, function(figure){

// Plotly.d3.json('https://raw.githubusercontent.com/plotly/datasets/master/3d-ribbon.json', function(figure){

// Get the State data I care about:

let states = ['New York'];




// Define the trace with the NYT States data:  
var trace1 = {
  x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  name: '',
  colorscale: figure.data[0].colorscale,
  type: 'surface',
  showscale: false
}

// Define the trace with the ribbon example data:  
var trace1 = {
    x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
    name: '',
    colorscale: figure.data[0].colorscale,
    type: 'surface',
    showscale: false
  }

  // var trace2 = {
  //   x:figure.data[1].x, y:figure.data[1].y, z:figure.data[1].z,
  //   name: '',
  //   colorscale: figure.data[1].colorscale,
  //   type: 'surface',
  //   showscale: false
  // }

  
  var data = [trace1, trace2];

  var layout = {
    title: 'Ribbon Plot',
    showlegend: false,
    autosize: true,
    width: 600,
    height: 600,
    scene: {
      xaxis: {title: 'Sample #'},
      yaxis: {title: 'Wavelength'},
      zaxis: {title: 'OD'}
    }
  };
  Plotly.newPlot('myDiv', data, layout);
});
