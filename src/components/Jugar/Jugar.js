import React from 'react'

const Jugar = ({ onClose }) => {
  return (
    <div className="jugar-container">
      <button className="close-btn" onClick={onClose}>✕</button>
      <h2>Jugar</h2>
      <p>Bienvenido al juego Impostor</p>
      <button className="start-btn">Comenzar Juego</button>
    </div>
  )
}

export default Jugar
