import React, { useEffect, useState } from 'react';

function Impostor() {
  const [data, setData] = useState(null);
  const [palabra, setPalabra] = useState("https://random-word-api.herokuapp.com/word?length=7&lang=es");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(palabra)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(console.error('Error:', error)));
  }, []);

  return (
    <div className="Impostor-root">
        <div className="container">{data}</div>
        
    </div>
  );
}

export default Impostor;