import React, { useEffect, useState } from 'react';

function Impostor() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  const API_URL = "https://random-word-api.herokuapp.com/word?lang=es";

  const fetchPalabra = () => {
    setLoading(true);
    setError("");
    
    fetch(API_URL)
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
  };

  useEffect(() => {
    fetchPalabra();
  }, [refreshKey]);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="Impostor-root">
      <div className="container">
        <div className="palabra-container">
          <h2 className="titulo">Palabra del Juego</h2>
          
          {loading && (
            <div className="loading-container">
              <div className="spinner"></div>
              <p className="loading">Cargando palabra desde internet...</p>
            </div>
          )}
          
          {error && (
            <div className="error-container">
              <p className="error">⚠️ Error: {error}</p>
              <button className="btn-retry" onClick={handleRefresh}>
                Reintentar
              </button>
            </div>
          )}
          
          {!loading && !error && data && (
            <div className="palabra-display">
              <p className="palabra">{Array.isArray(data) ? data[0] : data}</p>
              <button className="btn-refresh" onClick={handleRefresh}>
                🔄 Obtener Nueva Palabra
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Impostor;