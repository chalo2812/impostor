import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Global component styles for Next must be imported in _app
import '../components/App/App.css'
import '../components/Header/Header.css'
import '../components/Footer/Footer.css'
import '../components/Impostor/Impostor.css'
import '../components/Jugar/Jugar.css'
import '../components/Opciones/Opciones.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
