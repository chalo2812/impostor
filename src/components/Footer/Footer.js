import React from 'react';
// Footer styles imported globally from pages/_app.jsx to satisfy Next.js rules

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="container">Impostor App © {new Date().getFullYear()}</div>
    </footer>
  );
}
