//forOne - 1 яблоко, forTwo - 2 яблока, forFive - 5 яблок
export const getNoun = (count: number, forOne: string, forTwo: string, forFive: string) => {
  let n = Math.abs(count)
  n %= 100
  if (n >= 5 && n <= 20) {
    return forFive
  }
  n %= 10
  if (n === 1) {
    return forOne
  }
  if (n >= 2 && n <= 4) {
    return forTwo
  }
  return forFive
}

// export const getCategoriesInfoTranslated(info: )