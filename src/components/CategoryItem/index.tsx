import CardWrapper from "@/UI/Card/CardWrapper"
import FileTypeImg from "@/UI/FileTypeImg"
import { TfileType } from "@/UI/utils"
import TextBody from "./ItemBody/TextBody"
import VideoBody from "./ItemBody/VideoBody"
import ImageBody from "./ItemBody/ImageBody"
import OtherBody from "./ItemBody/OtherBody"

import styles from "./styles.module.css"

interface Props {
  type: TfileType
}

const RowItem = ({ type }: Props) => {
  let ItemBody

  if (type == "text") ItemBody = TextBody
  else if (type == "video") ItemBody = VideoBody
  else if (type == "image") ItemBody = ImageBody
  else ItemBody = OtherBody

  return (
    <div className={styles.wrapper} tabIndex={0}>
      <CardWrapper>
        <div className={styles.content}>
          <FileTypeImg type={type} />
          <ItemBody />
        </div>
      </CardWrapper>
    </div>
  )
}
export default RowItem
