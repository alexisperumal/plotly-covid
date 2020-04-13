// Alexis Perumal, 4/6/20
// https://plotly.com/javascript/ribbon-plots/

let ribbon_example_url = 'https://raw.githubusercontent.com/plotly/datasets/master/3d-ribbon.json'
let usStatesURL_CSV = "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv";

// Plotly.d3.json(ribbon_example_url, function(figure){
Plotly.d3.csv(usStatesURL_CSV, function(figure){

  console.log('figure', figure)

  // Plotly.d3.json('https://raw.githubusercontent.com/plotly/datasets/master/3d-ribbon.json', function(figure){

  // Get the State data I care about:

  let my_colorscale = [
    ['0.0', 'rgb(0, 0, 0)'],
    // ['0.1', 'rgb(31,31,255)'],
    // ['0.2', 'rgb(31,31,255)'],
    // ['0.3', 'rgb(31,31,255)'],
    // ['0.4', 'rgb(31,31,255)'],
    // ['0.5', 'rgb(31,31,255)'],
    // ['0.6', 'rgb(31,31,255)'],
    // ['0.7', 'rgb(31,31,255)'],
    // ['0.8', 'rgb(31,31,255)'],
    // ['0.9', 'rgb(31,31,255)'],
    ['1.0', 'rgb255,0,0)']];

  // State code start..
  let states = ['New York', 'New Jersey', 'California', "Michigan", "Massachusetts"];

  let cases_traces = [];
  let deaths_traces = [];
  let state_data = [];
  let trace = {};
  for (i=0; i<states.length; i++) {
      state_data = figure.filter(record => ((record.state == states[i]) &&
                                  (Date.parse(record.date) >= Date.parse("2020-03-15"))));

      // date_values = state_data.map(function(value) { return [value.date, value.date]; });
      let date_values = Array.from(Array(state_data.length).keys());
      let cases_values = state_data.map(function(value) { return [+value.cases, +value.cases]; });
      let deaths_values = state_data.map(function(value) { return [+value.deaths, +value.deaths]; });
      let state_index = Array(state_data.length).fill([2*i, 2*i+1]);

      cases_trace = {
          x: state_index,
          y: date_values,
          z: cases_values,
          name: `${states[i]} Cases`,
          // name: '',
          colorscale: my_colorscale,
          // mode: 'lines'
          type: 'surface',
          showscale: false
      };
      cases_traces.push(cases_trace);

      // deaths_trace = {
      //     x: x_values,
      //     y: y_deaths,
      //     name: `${states[i]} Deaths`,
      //     mode: 'lines'
      // };
      // deaths_traces.push(deaths_trace);
  };

  console.log('cases_traces: ', cases_traces)

  console.log('cases_traces[0]: ', cases_traces[0])


  // State code end...


  // // Define the trace with the NYT States data:  
  // var trace1 = {
  //   x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  //   name: '',
  //   colorscale: figure.data[0].colorscale,
  //   type: 'surface',
  //   showscale: false
  // }

  var data = cases_traces;

  var layout = {
    title: 'Cases by State',
    showlegend: true,
    autosize: true,
    width: 1000,
    height: 800,
    scene: {
      xaxis: {title: 'State'},
      yaxis: {title: 'Date'},
      zaxis: {title: 'Cases'}
    }
  };
  Plotly.newPlot('myDiv', data, layout);
});
