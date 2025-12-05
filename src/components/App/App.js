// App styles imported globally from pages/_app.jsx to satisfy Next.js rules
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App-root">
      <Header />
      <main className="App-main">
        <div className="container">Culibali</div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
