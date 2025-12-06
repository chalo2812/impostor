import React from 'react';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="container">Impostor App © {new Date().getFullYear()}</div>
    </footer>
  );
}
