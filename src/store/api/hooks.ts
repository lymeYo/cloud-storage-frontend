import { useProfileQuery } from "./user"

export const useIsAuth = () => useProfileQuery().isSuccess
