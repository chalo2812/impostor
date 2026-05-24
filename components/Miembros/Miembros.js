import React, { useState } from 'react';

const Miembros = ({ onClose }) => {
  const [miembros, setMiembros] = useState([
    {
      id: 1,
      nombre: 'Gonzalo Sola',
      cargo: 'Full Stack Developer',
      email: 'gsola@systechsa.com',
      fechaInicio: '2026-01-05',
      tareasAsignadas: 3,
      tareasCompletadas: 2,
      avatar: '👨‍💻',
      estado: 'Activo'
    },
    {
      id: 2,
      nombre: 'María García',
      cargo: 'Frontend Developer',
      email: 'mgarcia@example.com',
      fechaInicio: '2026-02-15',
      tareasAsignadas: 5,
      tareasCompletadas: 4,
      avatar: '👩‍💻',
      estado: 'Activo'
    },
    {
      id: 3,
      nombre: 'Carlos Rodríguez',
      cargo: 'Backend Developer',
      email: 'crodriguez@example.com',
      fechaInicio: '2026-03-01',
      tareasAsignadas: 4,
      tareasCompletadas: 3,
      avatar: '👨‍💼',
      estado: 'Activo'
    },
    {
      id: 4,
      nombre: 'Ana Martínez',
      cargo: 'UI/UX Designer',
      email: 'amartinez@example.com',
      fechaInicio: '2026-03-20',
      tareasAsignadas: 6,
      tareasCompletadas: 5,
      avatar: '👩‍🎨',
      estado: 'Activo'
    },
    {
      id: 5,
      nombre: 'Luis Fernández',
      cargo: 'DevOps Engineer',
      email: 'lfernandez@example.com',
      fechaInicio: '2026-04-10',
      tareasAsignadas: 3,
      tareasCompletadas: 1,
      avatar: '👨‍🔧',
      estado: 'Activo'
    },
    {
      id: 6,
      nombre: 'Sofia López',
      cargo: 'QA Tester',
      email: 'slopez@example.com',
      fechaInicio: '2026-05-01',
      tareasAsignadas: 7,
      tareasCompletadas: 6,
      avatar: '👩‍🔬',
      estado: 'Activo'
    }
  ]);

  const [nuevoMiembro, setNuevoMiembro] = useState({
    nombre: '',
    cargo: '',
    email: '',
    fechaInicio: '',
    avatar: '👤'
  });

  const agregarMiembro = () => {
    if (nuevoMiembro.nombre.trim() && nuevoMiembro.cargo.trim()) {
      setMiembros([...miembros, {
        ...nuevoMiembro,
        id: miembros.length + 1,
        tareasAsignadas: 0,
        tareasCompletadas: 0,
        estado: 'Activo'
      }]);
      setNuevoMiembro({
        nombre: '',
        cargo: '',
        email: '',
        fechaInicio: '',
        avatar: '👤'
      });
    }
  };

  const eliminarMiembro = (id) => {
    setMiembros(miembros.filter(miembro => miembro.id !== id));
  };

  const calcularProgreso = (completadas, asignadas) => {
    if (asignadas === 0) return 0;
    return Math.round((completadas / asignadas) * 100);
  };

  const calcularDiasDesdeInicio = (fechaInicio) => {
    const inicio = new Date(fechaInicio);
    const hoy = new Date();
    const diferencia = hoy - inicio;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    return dias;
  };

  const totalTareas = miembros.reduce((sum, m) => sum + m.tareasAsignadas, 0);
  const totalCompletadas = miembros.reduce((sum, m) => sum + m.tareasCompletadas, 0);

  return (
    <div className="miembros-overlay">
      <div className="miembros-container">
        <div className="miembros-header">
          <h2>👥 Equipo de Desarrollo</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="miembros-stats">
          <div className="stat-card">
            <span className="stat-number">{miembros.length}</span>
            <span className="stat-label">Miembros</span>
          </div>
          <div className="stat-card tareas">
            <span className="stat-number">{totalTareas}</span>
            <span className="stat-label">Tareas Totales</span>
          </div>
          <div className="stat-card completadas">
            <span className="stat-number">{totalCompletadas}</span>
            <span className="stat-label">Completadas</span>
          </div>
          <div className="stat-card progreso">
            <span className="stat-number">{totalTareas > 0 ? Math.round((totalCompletadas / totalTareas) * 100) : 0}%</span>
            <span className="stat-label">Progreso Global</span>
          </div>
        </div>

        <div className="miembros-grid">
          {miembros.map((miembro) => (
            <div key={miembro.id} className="miembro-card">
              <button 
                className="btn-eliminar-card" 
                onClick={() => eliminarMiembro(miembro.id)}
                title="Eliminar miembro"
              >
                ✕
              </button>
              
              <div className="miembro-avatar">
                <span className="avatar-emoji">{miembro.avatar}</span>
              </div>
              
              <div className="miembro-info">
                <h3 className="miembro-nombre">{miembro.nombre}</h3>
                <p className="miembro-cargo">{miembro.cargo}</p>
                <p className="miembro-email">📧 {miembro.email}</p>
              </div>

              <div className="miembro-detalles">
                <div className="detalle-item">
                  <span className="detalle-label">Fecha de Inicio:</span>
                  <span className="detalle-valor">{miembro.fechaInicio}</span>
                </div>
                <div className="detalle-item">
                  <span className="detalle-label">Días en el equipo:</span>
                  <span className="detalle-valor">{calcularDiasDesdeInicio(miembro.fechaInicio)} días</span>
                </div>
                <div className="detalle-item">
                  <span className="detalle-label">Tareas Asignadas:</span>
                  <span className="detalle-valor badge-tareas">{miembro.tareasAsignadas}</span>
                </div>
                <div className="detalle-item">
                  <span className="detalle-label">Completadas:</span>
                  <span className="detalle-valor badge-completadas">{miembro.tareasCompletadas}</span>
                </div>
              </div>

              <div className="progreso-container">
                <div className="progreso-header">
                  <span>Progreso</span>
                  <span className="progreso-porcentaje">
                    {calcularProgreso(miembro.tareasCompletadas, miembro.tareasAsignadas)}%
                  </span>
                </div>
                <div className="progreso-bar">
                  <div 
                    className="progreso-fill" 
                    style={{width: `${calcularProgreso(miembro.tareasCompletadas, miembro.tareasAsignadas)}%`}}
                  ></div>
                </div>
              </div>

              <div className="miembro-estado">
                <span className={`estado-badge ${miembro.estado.toLowerCase()}`}>
                  {miembro.estado}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="agregar-miembro">
          <h3>➕ Agregar Nuevo Miembro</h3>
          <div className="form-grid">
            <input
              type="text"
              placeholder="Nombre completo"
              value={nuevoMiembro.nombre}
              onChange={(e) => setNuevoMiembro({...nuevoMiembro, nombre: e.target.value})}
            />
            <input
              type="text"
              placeholder="Cargo"
              value={nuevoMiembro.cargo}
              onChange={(e) => setNuevoMiembro({...nuevoMiembro, cargo: e.target.value})}
            />
            <input
              type="email"
              placeholder="Email"
              value={nuevoMiembro.email}
              onChange={(e) => setNuevoMiembro({...nuevoMiembro, email: e.target.value})}
            />
            <input
              type="date"
              placeholder="Fecha de inicio"
              value={nuevoMiembro.fechaInicio}
              onChange={(e) => setNuevoMiembro({...nuevoMiembro, fechaInicio: e.target.value})}
            />
            <select
              value={nuevoMiembro.avatar}
              onChange={(e) => setNuevoMiembro({...nuevoMiembro, avatar: e.target.value})}
            >
              <option value="👤">👤 Default</option>
              <option value="👨‍💻">👨‍💻 Developer</option>
              <option value="👩‍💻">👩‍💻 Developer</option>
              <option value="👨‍💼">👨‍💼 Manager</option>
              <option value="👩‍💼">👩‍💼 Manager</option>
              <option value="👨‍🎨">👨‍🎨 Designer</option>
              <option value="👩‍🎨">👩‍🎨 Designer</option>
              <option value="👨‍🔧">👨‍🔧 DevOps</option>
              <option value="👩‍🔬">👩‍🔬 QA</option>
            </select>
          </div>
          <button className="btn-agregar" onClick={agregarMiembro}>
            Agregar Miembro
          </button>
        </div>
      </div>
    </div>
  );
};

export default Miembros;

// Made with Bob
