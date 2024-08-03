import { getNoun } from "@/utils"
import Body from "./Body"

interface Props {
  count: number
}

const OtherBody = ({ count }: Props) => {
  const str = getNoun(count, "файл", "файла", "файлов")

  return <Body title='Остальные' info={`${count} ${str}`} />
}

export default OtherBody
