import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="app-footer container">Impostor App © {year}</div>
    </>
  );
}

export default Footer
