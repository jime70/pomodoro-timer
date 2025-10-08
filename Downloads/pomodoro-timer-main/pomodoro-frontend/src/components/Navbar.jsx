import React from 'react'
import TimerSettings from './Settings/TimerSettings'

const Navbar = () => {
  return (
    <nav 
      className="bg-white/10 backdrop-blur-sm border-b border-white/20"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
        <div className="flex justify-between items-center h-16" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          {/* Logo/Título */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white" style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>Pomodoro Timer</h1>
          </div>

          {/* Menú de navegación */}
          <div className="flex items-center space-x-4" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Configuración del Timer */}
            <TimerSettings />
            
            {/* Dropdown de Autenticación */}
            <div className="relative">
              <button 
                className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Usuario
              </button>
              {/* Aquí irá el dropdown de auth más adelante */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
