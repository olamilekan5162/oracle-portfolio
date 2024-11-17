// import { useState, useEffect } from 'react'
import Hero from './components/LandingSection'
import Navbar from './components/Navbar'
import Profile from './components/GitHubProfile'

function App() {

  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <Profile />
    </div>
  )
}

export default App
