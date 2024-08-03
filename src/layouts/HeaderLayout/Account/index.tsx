import Auth from "./Auth"
import Unauth from "./Unauth"
import { useIsAuth } from "@/store/api/hooks"

const Account = () => {
  const isAuth = useIsAuth()

  if (isAuth) return <Auth />
  else return <Unauth />
}

export default Account
