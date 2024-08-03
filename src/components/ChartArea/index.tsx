import { useEffect, useMemo, useState } from "react"

import MyChart from "./MyChart"
import Info from "./Info"

import styles from "./styles.module.css"
import { useCategoriesInfoQuery } from "@/store/api/storage"
import { getDataForChart } from "./utils"

const ChartArea = () => {
  const { data, isLoading } = useCategoriesInfoQuery()
  const chartData = useMemo(() => (data ? getDataForChart(data) : null), [data])

  return (
    <div className={styles.wrapper}>
      <Info />
      {(isLoading || data) && <MyChart chartData={chartData} isLoading={isLoading} />}
    </div>
  )
}

export default ChartArea
