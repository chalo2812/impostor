import React, { useState } from 'react';

const Tareas = ({ onClose }) => {
  const [tareas, setTareas] = useState([
    { id: 1, nombre: 'Migrar a Next.js', estado: 'Completada', prioridad: 'Alta', asignado: 'Gonzalo Sola', fechaInicio: '2026-01-05', fechaFin: '2026-01-10' },
    { id: 2, nombre: 'Implementar botón refresh', estado: 'Completada', prioridad: 'Media', asignado: 'Gonzalo Sola', fechaInicio: '2026-05-24', fechaFin: '2026-05-24' },
    { id: 3, nombre: 'Diseñar componente Tareas', estado: 'En Progreso', prioridad: 'Alta', asignado: 'Gonzalo Sola', fechaInicio: '2026-05-24', fechaFin: '2026-05-25' },
    { id: 4, nombre: 'Diseñar componente Miembros', estado: 'Pendiente', prioridad: 'Alta', asignado: 'Gonzalo Sola', fechaInicio: '2026-05-25', fechaFin: '2026-05-26' },
    { id: 5, nombre: 'Implementar sistema de votación', estado: 'Pendiente', prioridad: 'Media', asignado: 'Sin asignar', fechaInicio: '2026-05-27', fechaFin: '2026-06-01' },
    { id: 6, nombre: 'Agregar tests unitarios', estado: 'Pendiente', prioridad: 'Baja', asignado: 'Sin asignar', fechaInicio: '2026-06-02', fechaFin: '2026-06-10' },
    { id: 7, nombre: 'Optimizar performance', estado: 'Pendiente', prioridad: 'Media', asignado: 'Sin asignar', fechaInicio: '2026-06-11', fechaFin: '2026-06-15' },
    { id: 8, nombre: 'Documentar API', estado: 'Pendiente', prioridad: 'Baja', asignado: 'Sin asignar', fechaInicio: '2026-06-16', fechaFin: '2026-06-20' },
  ]);

  const [nuevaTarea, setNuevaTarea] = useState({
    nombre: '',
    estado: 'Pendiente',
    prioridad: 'Media',
    asignado: '',
    fechaInicio: '',
    fechaFin: ''
  });

  const agregarTarea = () => {
    if (nuevaTarea.nombre.trim()) {
      setTareas([...tareas, { ...nuevaTarea, id: tareas.length + 1 }]);
      setNuevaTarea({
        nombre: '',
        estado: 'Pendiente',
        prioridad: 'Media',
        asignado: '',
        fechaInicio: '',
        fechaFin: ''
      });
    }
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const getEstadoClass = (estado) => {
    switch(estado) {
      case 'Completada': return 'estado-completada';
      case 'En Progreso': return 'estado-progreso';
      case 'Pendiente': return 'estado-pendiente';
      default: return '';
    }
  };

  const getPrioridadClass = (prioridad) => {
    switch(prioridad) {
      case 'Alta': return 'prioridad-alta';
      case 'Media': return 'prioridad-media';
      case 'Baja': return 'prioridad-baja';
      default: return '';
    }
  };

  return (
    <div className="tareas-overlay">
      <div className="tareas-container">
        <div className="tareas-header">
          <h2>📋 Gestión de Tareas</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="tareas-stats">
          <div className="stat-card">
            <span className="stat-number">{tareas.length}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-card completadas">
            <span className="stat-number">{tareas.filter(t => t.estado === 'Completada').length}</span>
            <span className="stat-label">Completadas</span>
          </div>
          <div className="stat-card progreso">
            <span className="stat-number">{tareas.filter(t => t.estado === 'En Progreso').length}</span>
            <span className="stat-label">En Progreso</span>
          </div>
          <div className="stat-card pendientes">
            <span className="stat-number">{tareas.filter(t => t.estado === 'Pendiente').length}</span>
            <span className="stat-label">Pendientes</span>
          </div>
        </div>

        <div className="tabla-container">
          <table className="tabla-tareas">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tarea</th>
                <th>Estado</th>
                <th>Prioridad</th>
                <th>Asignado</th>
                <th>Fecha Inicio</th>
                <th>Fecha Fin</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tareas.map((tarea, index) => (
                <tr key={tarea.id} className={index % 2 === 0 ? 'fila-par' : 'fila-impar'}>
                  <td>{tarea.id}</td>
                  <td className="tarea-nombre">{tarea.nombre}</td>
                  <td>
                    <span className={`badge ${getEstadoClass(tarea.estado)}`}>
                      {tarea.estado}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${getPrioridadClass(tarea.prioridad)}`}>
                      {tarea.prioridad}
                    </span>
                  </td>
                  <td>{tarea.asignado}</td>
                  <td>{tarea.fechaInicio}</td>
                  <td>{tarea.fechaFin}</td>
                  <td>
                    <button 
                      className="btn-eliminar" 
                      onClick={() => eliminarTarea(tarea.id)}
                      title="Eliminar tarea"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="agregar-tarea">
          <h3>➕ Agregar Nueva Tarea</h3>
          <div className="form-grid">
            <input
              type="text"
              placeholder="Nombre de la tarea"
              value={nuevaTarea.nombre}
              onChange={(e) => setNuevaTarea({...nuevaTarea, nombre: e.target.value})}
            />
            <select
              value={nuevaTarea.estado}
              onChange={(e) => setNuevaTarea({...nuevaTarea, estado: e.target.value})}
            >
              <option value="Pendiente">Pendiente</option>
              <option value="En Progreso">En Progreso</option>
              <option value="Completada">Completada</option>
            </select>
            <select
              value={nuevaTarea.prioridad}
              onChange={(e) => setNuevaTarea({...nuevaTarea, prioridad: e.target.value})}
            >
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </select>
            <input
              type="text"
              placeholder="Asignado a"
              value={nuevaTarea.asignado}
              onChange={(e) => setNuevaTarea({...nuevaTarea, asignado: e.target.value})}
            />
            <input
              type="date"
              value={nuevaTarea.fechaInicio}
              onChange={(e) => setNuevaTarea({...nuevaTarea, fechaInicio: e.target.value})}
            />
            <input
              type="date"
              value={nuevaTarea.fechaFin}
              onChange={(e) => setNuevaTarea({...nuevaTarea, fechaFin: e.target.value})}
            />
          </div>
          <button className="btn-agregar" onClick={agregarTarea}>
            Agregar Tarea
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tareas;

// Made with Bob
