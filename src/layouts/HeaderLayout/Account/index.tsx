import { useAppSelector } from "@/store/hooks"
import Auth from "./Auth"
import Unauth from "./Unauth"

const Account = () => {
  const { isAuth, userData } = useAppSelector((store) => store.auth)

  if (isAuth) return <Auth />
  else return <Unauth />
}

export default Account
