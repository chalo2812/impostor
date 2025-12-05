import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/index.css'
// Global component styles for Next must be imported in _app
import '../src/components/App/App.css'
import '../src/components/Header/Header.css'
import '../src/components/Footer/Footer.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
