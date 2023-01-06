import { createContext, useContext, useState } from 'react';

const IndexContext = createContext();

export function IndexProvider({ children }) {
  const [manIndexUpdated, setManIndexUpdated] = useState(0)
  const [toolIndexUpdated, setToolIndexUpdated] = useState(0)
  return (
    <IndexContext.Provider
      value={{
        manIndexUpdated, 
        setManIndexUpdated,
        toolIndexUpdated,
        setToolIndexUpdated,
      }}
    >
      {children}
    </IndexContext.Provider>
  )
}

export function useIndexContext() {
  return useContext(IndexContext)
}