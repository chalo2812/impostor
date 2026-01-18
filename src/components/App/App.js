import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Impostor from '../Impostor/Impostor';  

function  App() {
  return (
    <div className="App-root">
      <Header />
      <main>
        <Impostor />
      </main>
      <Footer />
    </div>
  );
}

export default App;
