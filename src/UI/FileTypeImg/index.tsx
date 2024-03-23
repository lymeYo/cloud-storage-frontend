import Image from "next/image"

import TextFileImg from "@/assets/images/FileTypes/Text.png"
import VideoFileImg from "@/assets/images/FileTypes/Video.png"
import ImageFileImg from "@/assets/images/FileTypes/Image.png"
import OtherFileImg from "@/assets/images/FileTypes/Other.png"

import { TfileType } from "../utils"

interface Props {
  type: TfileType
}

const FileTypeImg = ({ type }: Props) => {
  switch (type) {
    case "text":
      return <Image src={TextFileImg.src} width={35} height={35} alt='Файл с текстом' />
    case "image":
      return <Image src={ImageFileImg.src} width={35} height={35} alt='Файл с изображением' />
    case "video":
      return <Image src={VideoFileImg.src} width={35} height={35} alt='Файл с видео' />
  }

  return <Image src={OtherFileImg.src} width={35} height={35} alt='Нераспознанный тип файла' />
}

export default FileTypeImg
