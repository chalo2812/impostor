import React, { useState } from 'react'

const Opciones = ({ onClose }) => {
  const [volume, setVolume] = useState(70)
  const [difficulty, setDifficulty] = useState('normal')

  return (
    <div className="opciones-container">
      <button className="close-btn" onClick={onClose}>✕</button>
      <h2>Opciones</h2>
      
      {<div className="options-group">
        <label htmlFor="volume">Volumen</label>
        <input 
          type="range" 
          id="volume" 
          min="0" 
          max="100" 
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
        <span>{volume}%</span>
      </div>}

      <div className="options-group">
        <label htmlFor="difficulty">Dificultad</label>
        <select 
          id="difficulty" 
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="facil">Fácil</option>
          <option value="normal">Normal</option>
          <option value="dificil">Difícil</option>
        </select>
      </div>
      <button className="save-btn">Guardar Opciones</button>
    </div>
  )
}

export default Opciones
