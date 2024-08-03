import { getNoun } from "@/utils"
import Body from "./Body"

interface Props {
  count: number
}

const VideoBody = ({ count }: Props) => {
  const str = getNoun(count, "видео", "видео", "видео")

  return <Body title='Видео' info={`${count} ${str}`} />
}

export default VideoBody
