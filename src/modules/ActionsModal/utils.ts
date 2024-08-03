import { useLogoutMutation } from "@/store/api/auth"
import { TconfirmModalType } from "@/store/features/ui/uiSlice"

type Toptions = [string, () => void]

export const useGetOptionsByType = (type: TconfirmModalType): Toptions => {
  const [logout] = useLogoutMutation()
  
  if (type == "logout") {
    return ["Вы хотите выйти из аккаунта?", logout]
  }

  return ["", logout]
}

export const getQuestionByType = (type: TconfirmModalType) => {
  if (type == "logout") return 
}
