import React, { useEffect, useState } from 'react';
import Jugar from '../Jugar/Jugar';
import Opciones from '../Opciones/Opciones';

const Header = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    const onScroll = () => setCollapsed(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const handleMenuClick = (component) => {
    setActiveComponent(component);
    setIsOpen(false); // Cierra el menú al seleccionar
  };
  return (
    <div className={`header-container ${collapsed ? 'collapsed' : ''}`}>
      <div className="header left">
        <h1 className="title">
          Impostor
        </h1>
        <button onClick={toggleMenu} className="menu-toggle">☰</button>
      </div>
      {isOpen && (
        <div className="sidebar-menu">
          <button className="sidebar-item cerrar" onClick={() => setIsOpen(false)}>✕</button>
          <button className="sidebar-item" onClick={() => handleMenuClick('jugar')}>🎮 Jugar</button>
          <button className="sidebar-item" onClick={() => handleMenuClick('opciones')}>⚙️ Opciones</button>
        </div>
      )}

      
        {activeComponent === 'jugar' && (
          <Jugar onClose={() => setActiveComponent(null)} />
        )}
        {activeComponent === 'opciones' && (
          <Opciones onClose={() => setActiveComponent(null)} />
        )}
      
    </div>
  );
};

export default Header;