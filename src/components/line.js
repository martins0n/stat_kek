var jStat = require('jStat').jStat;

function generate_distr_beta(alpha, beta) {
    var data = []
    var total = 100
    
    for (var i = 0; i < total; i++){
        data.push([i / total, jStat.beta.pdf( i / total, alpha, beta)])
    }
    return data
}

function generate_distr_normal(mean, std) {
    var data = []
    var total = 100
    for (var i = -total; i <= total; i++){
        data.push([i / total, jStat.normal.pdf( i / total, mean, std)])
    }
    return data
}

export default(function (k_, n_){
    var k = parseInt(k_)
    var n = parseInt(n_)
    var mean = k / n
    var std = Math.sqrt(k / n * (1 - k/n) / n)
    return {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: ['beta', 'normal']
        },
        xAxis: {
            type: "value",
            min: 0,
            max: 1,
            interval: 0.1
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
                name: 'beta',
                type: 'line',
                areaStyle: {},
                symbol: 'none',
                data: generate_distr_beta(k + 1, n - k + 1)
        },
            {   
                name: 'normal',
                type: 'line',
                areaStyle: {},
                symbol: 'none',
                data: generate_distr_normal(mean, std)
        }
]
}})