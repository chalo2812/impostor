import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="container">Impostor App © {new Date().getFullYear()}</div>
    </footer>
  );
}
