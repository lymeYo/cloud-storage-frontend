import { TfileType } from "@/utils/file"
import CardWrapper from "@/UI/Card/CardWrapper"
import TextBody from "./ItemBody/TextBody"
import VideoBody from "./ItemBody/VideoBody"
import ImageBody from "./ItemBody/ImageBody"
import AudioBody from "./ItemBody/AudioBody"
import OtherBody from "./ItemBody/OtherBody"

import styles from "./styles.module.css"
import FileTypeImg from "@/UI/FileTypeImg"

interface Props {
  type: TfileType
  count: number
}

const RowItem = ({ type, count }: Props) => {
  return (
    <div className={styles.wrapper}>
      <CardWrapper>
        <div className={styles.content}>
          <FileTypeImg type={type} />
          {type == "text" ? (
            <TextBody count={count} />
          ) : type == "video" ? (
            <VideoBody count={count} />
          ) : type == "image" ? (
            <ImageBody count={count} />
          ) : type == "audio" ? (
            <AudioBody count={count} />
          ) : (
            <OtherBody count={count} />
          )}
        </div>
      </CardWrapper>
    </div>
  )
}
export default RowItem
