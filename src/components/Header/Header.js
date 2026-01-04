import React, { useEffect, useState } from 'react'

function Header() {
  const [collapsed, setCollapsed] = useState(false)
  const [role, setRole] = useState('civil') // 'civil' | 'impostor'

  useEffect(() => {
    const saved = localStorage.getItem('role')
    if (saved === 'civil' || saved === 'impostor') {
      setRole(saved)
      document.documentElement.setAttribute('data-role', saved)
    } else {
      document.documentElement.setAttribute('data-role', role)
    }
    const onScroll = () => setCollapsed(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-role', role)
      localStorage.setItem('role', role)
    }
  }, [role])

  const handleRole = (r) => {
    setRole(r)
  }

  return (
    <div className={`header ${collapsed ? 'collapsed' : ''} `} role="banner">
      <div className="left" aria-hidden />
      <h1 className="title">Impostor El juego</h1>
      <div className="controls" role="toolbar" aria-label="Selector de rol">
        <button
          className={`roleBtn ${role === 'civil' ? 'selected civil' : ''}`}
          onClick={() => handleRole('civil')}
          aria-pressed={role === 'civil'}
          title="Civil"
          type="button">
          <svg className="icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span className="label">Civil</span>
        </button>
        <button
          className={`roleBtn ${role === 'impostor' ? 'selected impostor' : ''}`}
          onClick={() => handleRole('impostor')}
          aria-pressed={role === 'impostor'}
          title="Impostor"
          type="button">
          <svg className="icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path fill="currentColor" d="M12 2c-3.86 0-7 3.14-7 7v1H4v2h2v6h12v-6h2v-2h-1V9c0-3.86-3.14-7-7-7zm0 2c2.76 0 5 2.24 5 5h-2a3 3 0 00-6 0H7c0-2.76 2.24-5 5-5zm-4 9h8v4H8v-4z" />
          </svg>
          <span className="label">Impostor</span>
        </button>
      </div>
    </div>
  )
}

export default Header