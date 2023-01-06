import '../styles/globals.css'
import { UserProvider } from "../context/UserContext"

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <UserProvider>{page}</UserProvider>)

  return getLayout(<Component {...pageProps} />)
}
