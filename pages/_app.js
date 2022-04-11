import Haeder from '../components/Haeder'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Haeder />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
