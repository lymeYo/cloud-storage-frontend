export type TfileType = "text" | "image" | "video" | "audio" | "other"

export const bytesToGB = (bytes: number) => (bytes * Math.pow(2, -30)).toFixed(2)
export const bytesToMB = (bytes: number) => (bytes * Math.pow(2, -20)).toFixed(2)
export const bytesToKB = (bytes: number) => (bytes * Math.pow(2, -10)).toFixed(2)
