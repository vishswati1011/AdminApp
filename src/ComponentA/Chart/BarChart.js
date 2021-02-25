import React from 'react'
import { Bar } from 'react-chartjs-2'
function BarChart() {

    const data = {
        labels: ['Jan', 'Feb', 'March', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                data: [3, 2, 2, 1, 5],
                background:['rgba(255,206,86,0.2)',
                'rgba(255,206,86,0.2)',
                'rgba(255,206,86,0.2)',
                'rgba(255,206,86,0.2)',
                'rgba(255,206,86,0.2)'],
                backgroundColor:['rgba(255,206,86,0.2)',
                'rgba(255,206,86,0.2)',
                'rgba(255,206,86,0.2)',
                'rgba(255,206,86,0.2)',
                'rgba(255,206,86,0.2)'],
                pointbackgroundColor:['rgba(255,206,86,0.2)'],
                pointBorderColor:'rgba(255,206,86,0.2)'
            },
            {
                label: 'Sales for 2019 (M)',
                data: [1, 3, 2, 2, 3],
                background:['rgba(54,162,235,0.2)',
                'rgba(54,162,235,0.2)',
                'rgba(54,162,235,0.2)',
                'rgba(54,162,235,0.2)',
                'rgba(54,162,235,0.2)'],
                backgroundColor:['rgba(54,162,235,0.2)',
                'rgba(54,162,235,0.2)',
                'rgba(54,162,235,0.2)',
                'rgba(54,162,235,0.2)',
                'rgba(54,162,235,0.2)'],
                pointbackgroundColor:['rgba(54,162,235,0.2)'],
                pointBorderColor:'rgba(54,162,235,0.2)'
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Bar Chart'
        }, scales: {
            yAxes: [
                {
                    ticks: {
                    min: 0,
                     max: 6,
                      stepSize: 1
                    }
                }
            ]
        }
    }
    return (
        <Bar data={data} options={options} />
    )
}
export default BarChart;