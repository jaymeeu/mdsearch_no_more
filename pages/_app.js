import CategoryContextProvider from '../contexts/CategoryContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CategoryContextProvider>
      <Component {...pageProps} />
    </CategoryContextProvider>
  )
}

export default MyApp
