import React from 'react'
import PomodoroTimer from '../components/PomodoroTimer'
import autumnGif from '../assets/images/autumn.gif'

const HomePage = () => {
  return (
    <div 
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${autumnGif})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <PomodoroTimer />
    </div>
  )
}

export default HomePage
