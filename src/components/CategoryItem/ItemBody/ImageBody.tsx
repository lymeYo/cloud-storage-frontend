import { getNoun } from "@/utils"
import Body from "./Body"

interface Props {
  count: number
}

const ImageBody = ({ count }: Props) => {
  const str = getNoun(count, "изображение", "изображения", "изображений")

  return <Body title='Изображения' info={`${count} ${str}`} />
}

export default ImageBody
