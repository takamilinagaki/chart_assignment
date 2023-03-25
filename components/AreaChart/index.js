import { useState, useEffect } from "react"
import styles from './areachart.module.css'

import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  export default function AreaChart(){

    const [chartData, setChartData] = useState({
      datasets: []
   })
  
   const [chartOptions, setChartOptions] = useState({})
  
  
   useEffect(() => {
    setChartData({
      labels: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
      datasets: [
          {
              label: "celsius",
              data: [11.81, 11.57, 12.09, 12.15, 11.57, 12.14, 12.31, 12.32, 12.36],
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
              text: "Average Tempreture in Japan"
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
  
  
  
  