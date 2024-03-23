import MyChart from "./MyChart"
import Info from "./Info"

import styles from "./styles.module.css"

const ChartArea = () => {
  return (
    <div className={styles.wrapper}>
      <Info />
      <MyChart />
    </div>
  )
}
export default ChartArea
