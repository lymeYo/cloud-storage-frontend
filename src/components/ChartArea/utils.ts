import { TcategoriesInfoRes } from "@/store/api/storage"
import { TfileType } from "@/utils/file"

export type TchartData =
  | {
      label: string
      count: number
      color: string
    }[]
  | null

export const getDataForChart = (data: TcategoriesInfoRes): TchartData => {
  const getTranslatedLabel = (type: TfileType | string) => {
    if (type == "audio") return "Аудио"
    if (type == "image") return "Изображения"
    if (type == "video") return "Видео"
    if (type == "text") return "Документы"

    return "Остальное"
  }

  const getLabelColor = (type: TfileType | string) => {
    if (type == "audio") return "#d600d6"
    if (type == "image") return "#fbae5e"
    if (type == "video") return "#79ade3"
    if (type == "text") return "#3e8b64"

    return "#e24651"
  }

  let labelData: TchartData
  const filesCount = Object.values(data).reduce((value, acc) => acc + value, 0)

  if (filesCount == 0) {
    labelData = null
  } else {
    labelData = Object.entries(data).map(([fileType, count]) => ({
      label: getTranslatedLabel(fileType),
      count,
      color: getLabelColor(fileType)
    }))
  }

  return labelData
}
