import { getParams } from "./helpers"
import { chartConfigurations } from "./chartconfigs"
import Chart from './Chart.js/src/index'

let p = getParams(window.location.href)
var chartId = p['id']
var ctx = document.getElementById('myChart').getContext('2d');

var cConfig = chartConfigurations[chartId]

Chart.defaults.global.animation = false
var myChart = new Chart(ctx, cConfig);