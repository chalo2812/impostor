import React, { useEffect, useState } from 'react';

function Impostor() {
  const [data, setData] = useState(null);
  const [palabra, setPalabra] = useState("https://random-word-api.herokuapp.com/word?lang=es");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    
    fetch(palabra)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error HTTP! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message || 'Error desconocido al obtener la palabra');
        setLoading(false);
      });
  }, [palabra]);

  return (
    <div className="Impostor-root">
      <div className="container">
        {loading && <p className="loading">Cargando palabra...</p>}
        {error && <p className="error">Error: {error}</p>}
        {!loading && !error && data && <p className="palabra">{Array.isArray(data) ? data[0] : data}</p>}
      </div>
    </div>
  );
}

export default Impostor;