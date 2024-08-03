import { getNoun } from "@/utils"
import Body from "./Body"

interface Props {
  count: number
}

const AudioBody = ({ count }: Props) => {
  const str = getNoun(count, "аудио", "аудио", "аудио")

  return <Body title='Аудио' info={`${count} ${str}`} />
}

export default AudioBody
