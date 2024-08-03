export type Tauth = "login" | "register"

export const getErrorMessByStatus = (code: number, type: Tauth): string => {
  if (type == "login") {
    if (code == 401) return "Неверные данные для входа"
    return "Не получается войти в данный момент"
  } else if (type == "register") {
    if (code == 403) return "Пользователь с такими данными уже существует"
    return "Не поулчается зарегистрироваться в данный момент"
  }

  return "" //для ts
}

export const errorMessages = {
  default: "Что-то пошло не так",
  emailAlreadyInUse: "Пользователь с такой почтой уже существует",
  invalidLoginData: "Неверный логин или пароль",
  invalidRegisterEmail: "Данная почта не подходит",
  invalidRegisterPassword: "Пароль должен быть больше 6 символов"
} as const

export type TerrorMessagesValue = (typeof errorMessages)[keyof typeof errorMessages]
