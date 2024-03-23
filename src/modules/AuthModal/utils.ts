export const errorMessages = {
  default: "Что-то пошло не так",
  emailAlreadyInUse: "Пользователь с такой почтой уже существует",
  invalidLoginData: "Неверный логин или пароль",
  invalidRegisterEmail: "Данная почта не подходит",
  invalidRegisterPassword: "Пароль должен быть больше 6 символов"
} as const

export type TerrorMessagesValue = (typeof errorMessages)[keyof typeof errorMessages]
