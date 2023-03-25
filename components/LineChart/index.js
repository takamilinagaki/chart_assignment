import { useState, useEffect } from "react"
import styles from './linecharts.module.css'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart(){

  const [chartData, setChartData] = useState({
    datasets: []
 })

 const [chartOptions, setChartOptions] = useState({})


 useEffect(() => {
  setChartData({
    labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
        {
            label: "millions",
            data: [8.61, 6.22, 8.36, 10.36, 13.41, 19.74, 24.04, 28.69, 31.19, 31.88, 4.12, 0.25, 3.83],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgb(53, 162, 235, 0.4)'
        }
    ]
  })
  setChartOptions({
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: "Number of foreign visitors"
        }
    },
    maintainAspectRatio: false,
    responsive: true
  })
}, [])

return(
    <>
    <div className={styles.containers}>
      <Line data={chartData} options={chartOptions} />
    </div>
    </>
)
}


