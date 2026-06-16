import React, { useEffect, useState } from 'react';

function Impostor() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  const API_URL = "https://random-word-api.herokuapp.com/word?lang=es";

  // Función para obtener un emoji basado en la palabra
  const getEmojiForWord = (word) => {
    if (!word) return "🎯";
    
    const lowerWord = word.toLowerCase();
    
    // Emojis por categorías de palabras
    const emojiMap = {
      // Animales
      'perro': '🐕', 'gato': '🐱', 'león': '🦁', 'tigre': '🐯', 'elefante': '🐘',
      'mono': '🐵', 'pájaro': '🐦', 'pez': '🐟', 'ballena': '🐋', 'delfín': '🐬',
      'caballo': '🐴', 'vaca': '🐄', 'cerdo': '🐷', 'oveja': '🐑', 'pollo': '🐔',
      
      // Comida
      'pizza': '🍕', 'hamburguesa': '🍔', 'taco': '🌮', 'sushi': '🍣', 'pan': '🍞',
      'queso': '🧀', 'manzana': '🍎', 'banana': '🍌', 'naranja': '🍊', 'uva': '🍇',
      'café': '☕', 'té': '🍵', 'agua': '💧', 'vino': '🍷', 'cerveza': '🍺',
      
      // Objetos
      'casa': '🏠', 'coche': '🚗', 'avión': '✈️', 'barco': '⛵', 'tren': '🚂',
      'libro': '📚', 'teléfono': '📱', 'computadora': '💻', 'reloj': '⌚', 'llave': '🔑',
      'pelota': '⚽', 'guitarra': '🎸', 'piano': '🎹', 'cámara': '📷', 'regalo': '🎁',
      
      // Naturaleza
      'árbol': '🌳', 'flor': '🌸', 'sol': '☀️', 'luna': '🌙', 'estrella': '⭐',
      'nube': '☁️', 'lluvia': '🌧️', 'nieve': '❄️', 'fuego': '🔥', 'montaña': '⛰️',
      
      // Emociones y conceptos
      'amor': '❤️', 'feliz': '😊', 'triste': '😢', 'enojado': '😠', 'sorpresa': '😲',
      'tiempo': '⏰', 'dinero': '💰', 'trabajo': '💼', 'escuela': '🏫', 'hospital': '🏥',
    };
    
    // Buscar coincidencia exacta
    if (emojiMap[lowerWord]) {
      return emojiMap[lowerWord];
    }
    
    // Buscar coincidencia parcial
    for (const [key, emoji] of Object.entries(emojiMap)) {
      if (lowerWord.includes(key) || key.includes(lowerWord)) {
        return emoji;
      }
    }
    
    // Emojis por primera letra si no hay coincidencia
    const firstLetter = lowerWord[0];
    const letterEmojis = {
      'a': '🅰️', 'b': '🅱️', 'c': '©️', 'd': '🌛', 'e': '📧',
      'f': '🎏', 'g': '🎮', 'h': '🏨', 'i': 'ℹ️', 'j': '🎷',
      'k': '🔑', 'l': '📍', 'm': 'Ⓜ️', 'n': '🎵', 'o': '⭕',
      'p': '🅿️', 'q': '🎯', 'r': '♻️', 's': '💲', 't': '🎪',
      'u': '☂️', 'v': '✌️', 'w': '〰️', 'x': '❌', 'y': '💴',
      'z': '💤'
    };
    
    return letterEmojis[firstLetter] || '🎯';
  };

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

  // Función para determinar el tamaño según la longitud de la palabra
  const getWordLengthClass = (word) => {
    if (!word) return '';
    const length = word.length;
    if (length > 12) return 'very-long';
    if (length > 8) return 'long';
    return '';
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
              <div className="palabra-with-emoji">
                <span className="emoji-icon">{getEmojiForWord(Array.isArray(data) ? data[0] : data)}</span>
                <p className="palabra" data-length={getWordLengthClass(Array.isArray(data) ? data[0] : data)}>
                  {Array.isArray(data) ? data[0] : data}
                </p>
              </div>
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