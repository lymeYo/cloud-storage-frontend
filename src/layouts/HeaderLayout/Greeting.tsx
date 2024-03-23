import { useMemo } from "react"

import styles from "./styles.module.css"

const greetings = {
  morning: "Доброе утро!",
  afternoon: "Добрый день!",
  evening: "Добрый вечер!",
  night: "Доброй ночи!"
}

const Greeting = () => {
  const greeting = useMemo(() => {
    const curHours = new Date().getHours()
    if (curHours >= 5 && curHours <= 11) return greetings.morning
    if (curHours > 11 && curHours <= 17) return greetings.afternoon
    if (curHours > 17 && curHours <= 23) return greetings.evening
    return greetings.night
  }, [])

  return <span className={styles.greeting}>{greeting}</span>
}
export default Greeting
