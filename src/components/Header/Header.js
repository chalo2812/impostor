import React, { useEffect, useState } from 'react'
import Jugar from '../Jugar/Jugar'
import Opciones from '../Opciones/Opciones'


const  Header = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const onScroll = () => setCollapsed(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMenuClick = (component) => {
    setActiveComponent(component)
    setIsOpen(false)
  }

  const handleCloseComponent = () => {
    setActiveComponent(null)
  }

  if (activeComponent === 'jugar') {
    return <Jugar onClose={handleCloseComponent} />
  }

  if (activeComponent === 'opciones') {
    return <Opciones onClose={handleCloseComponent} />
  }

  return (
    <div className="header-container">
      <nav className="header">
        <div className="left">
          <button onClick={toggleMenu} className="menu-toggle">
            ☰
          </button>
        </div>        
        <h1 className="title">Impostor El juego</h1>
      </nav>
      
      {isOpen && (
        <div className="sidebar-menu">
          <button className="sidebar-item" onClick={() => handleMenuClick('jugar')}>Jugar</button>
          <button className="sidebar-item" onClick={() => handleMenuClick('opciones')}>Opciones</button>
        </div>
      )}
    </div>
  )
};

export default Header;

