function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


var chartConfigurations = {}
chartConfigurations.b = {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
}
chartConfigurations.a = {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      // backgroundColor: 'rgb(205, 199, 132)',

      backgroundColor: function (i) {
        //console.log(i)
        var hue = getRandomInt(360)
        var hslstring = 'hsl(' + hue + ',100%,50%)'
        // console.log("Color:" + hslstring)
        if (i.dataPoint) {
          // console.log(i.dataPoint)
          return hslstring
        } else {
          return hslstring
        }
      }
      ,

      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 7],
      fill: "origin",

    }]
  },

  // Configuration options go here
  options: {}
}

var scatterdata = [
  { x: 1, y: 5 },
  { x: 2, y: 8 },
  { x: 3, y: 4 },
  { x: 3, y: NaN },
  { x: 7, y: 5 },
  { x: 8, y: 4 },
  { x: 8, y: NaN },
]
var scatterdata2 = [
  { x: 3, y: 4 },
  { x: 4, y: 6 },
  { x: 5, y: 5 },
  { x: 6, y: 7 },
  { x: 7, y: 5 },
  { x: 7, y: NaN },
  { x: 8, y: 4 },
  { x: 9, y: 8 },
  { x: 10, y: 3 },
]
chartConfigurations.c = {
  type: 'line',
  data: {
    datasets: [
      {
        backgroundColor: 'red',
        label: "scatter a",
        data: scatterdata,
        lineTension: 0,

      },
      {
        backgroundColor: 'blue',
        label: "scatter b",
        data: scatterdata2,
        lineTension: 0,

      },
    ],

  },
  options: {
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom',
        ticks: {
          min: 0,
          max: 12 ,
        }
      }],
      yAxes: [{
        type: 'linear',
        ticks: {
          min: 0,
          max: 10,
        }
      }]    }
  }
}

export { chartConfigurations }
