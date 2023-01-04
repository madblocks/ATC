import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState("")
  const [authenticated, setAuth] = useState(false)
  const [tokens, setTokens] = useState({})
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        authenticated,
        setAuth,
        tokens,
        setTokens
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  return useContext(UserContext)
}