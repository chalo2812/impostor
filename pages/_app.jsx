import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/index.css'
import '../src/components/App/App.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
