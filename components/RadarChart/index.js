import { useState, useEffect } from "react"
import styles from './radarchart.module.css'


import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';

  
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

export default function RadarChart(){

  const [chartData, setChartData] = useState({
    datasets: []
 })

 const [chartOptions, setChartOptions] = useState({})


 useEffect(() => {
  setChartData({
    labels: ["Viet Nam", "China", "Korea", "Phillipines", "Indonesia", "United States", "Thailand", "Brazil", "Taipen", "Nepal"],
    datasets: [
        {
            label: "number of people",
            data: [448053, 778112, 454122, 279660, 66832, 55761, 53379, 208538, 55872, 95982],
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
            text: "Number of foreign people in Japan"
        }
    },
    maintainAspectRatio: false,
    responsive: true
  })
}, [])

return(
    <>
    <div className={styles.containers}>
      <Radar data={chartData} options={chartOptions} />
    </div>
    </>
)
}


