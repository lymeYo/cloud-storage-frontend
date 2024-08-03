export const contextTypes = {
  folder: "folder",
  file: "file"
}

export type Toption = {
  label: string
  callback: () => void
}

export const options = [
  {
    callback: () => {
      console.log("Удалить")
    },
    label: "Удалить"
  },
  {
    callback: () => {
      console.log("Переименовать")
    },
    label: "Переименовать"
  },
  {
    callback: () => {
      console.log("Переместить")
    },
    label: "Переместить"
  }
]
