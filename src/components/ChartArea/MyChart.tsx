import { useEffect, useRef } from "react"

import { Chart, registerables } from "chart.js"

import styles from "./styles.module.css"

const MyChart = () => {
  const ctx = useRef<HTMLCanvasElement>(null)
  const chart = useRef<any>() //Chart<"pie", number[], string>

  const renderChart = () => {
    Chart.register(...registerables)
    if (ctx.current && !chart.current)
      chart.current = new Chart(ctx.current, {
        type: "pie",
        data: {
          labels: ["Документы", "Видео", "Изображения", "Остальные"],
          datasets: [
            {
              label: "Занятое место",
              data: [200, 50, 100, 75],
              backgroundColor: ["#3e8b64", "#79ade3", "#fbae5e", "#e24651"]
            }
          ]
        },
        options: {
          plugins: {
            legend: {
              display: false
            }
          }
        }
      })
  }

  useEffect(() => {
    renderChart()
  }, [])

  return (
    <div className={styles.chartContainer}>
      <canvas ref={ctx}></canvas>
    </div>
  )
}
export default MyChart
