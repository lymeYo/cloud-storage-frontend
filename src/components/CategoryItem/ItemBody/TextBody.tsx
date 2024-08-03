import { getNoun } from "@/utils"
import Body from "./Body"

interface Props {
  count: number
}

const TextBody = ({ count }: Props) => {
  const label = getNoun(count, "документ", "документа", "документов")

  return <Body title='Документы' info={`${count} ${label}`} />
}

export default TextBody
