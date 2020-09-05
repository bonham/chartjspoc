import { getParams } from "./helpers"
import { chartConfigurations } from "./chartconfigs"
// import Chart from 'chart.js';
import Chart from './Chart.js/src/index'

let p = getParams(window.location.href)
var chartId = p['id']
var ctx = document.getElementById('myChart').getContext('2d');

var cConfig = chartConfigurations[chartId]

var myChart = new Chart(ctx, cConfig);