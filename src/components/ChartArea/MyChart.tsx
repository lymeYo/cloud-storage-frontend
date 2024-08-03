import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"
import cx from "classnames"

import { TchartData } from "./utils"
import styles from "./styles.module.css"

interface Props {
  chartData: TchartData
  isLoading: boolean
}

const MyChart = ({ chartData, isLoading }: Props) => {
  const ctx = useRef<HTMLCanvasElement>(null)
  const chart = useRef<any>(null)

  const getChartDataObj = (_chartData: TchartData) => {
    if (_chartData) {
      return {
        labels: _chartData.map((d) => d.label),
        datasets: [
          {
            label: "Занятое место",
            data: _chartData.map((d) => d.count),
            backgroundColor: _chartData.map((d) => d.color)
          }
        ]
      }
    } else {
      return {
        labels: [],
        datasets: [
          {
            label: "",
            data: [1],
            backgroundColor: "#555"
          }
        ]
      }
    }
  }

  useEffect(() => {
    Chart.register(...registerables)
    if (!ctx.current || chart.current) return

    chart.current = new Chart(ctx.current, {
      type: "pie",
      data: getChartDataObj(chartData),
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: Boolean(chartData)
          }
        }
      }
    })

    chart.current.update()

    return () => {
      chart.current.destroy()
      chart.current = null
    }
  }, [chartData])

  return (
    <div className={cx(styles.chartContainer, isLoading ? styles.invisivle : "")}>
      <canvas ref={ctx}></canvas>
    </div>
  )
}
export default MyChart
