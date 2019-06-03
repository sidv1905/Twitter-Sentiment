var positivion = document.getElementById('demo1').getAttribute('value');
var negation = document.getElementById('demo2').getAttribute('value');
var neutraly = document.getElementById('demo3').getAttribute('value');
console.log(positivion,negation)
// Load google charts
var data = [{
    values: [positivion, negation, neutraly],
    labels: ['Positive', 'Negative', 'Neutraly'],
    type: 'pie'
  }];
  
  
  Plotly.newPlot('myDiv', data, {}, {showSendToCloud:true});