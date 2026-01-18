import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="app-footer">
        <div className="container">Impostor App © {year}</div>
      </div>
    </footer>
  );
}

export default Footer
