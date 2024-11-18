// import { useState, useEffect } from 'react'
import Hero from './components/LandingSection'
import Navbar from './components/Navbar'
import Profile from './components/GitHubProfile'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {

  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <Profile />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
