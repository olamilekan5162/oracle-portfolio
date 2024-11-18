// import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Profile from './components/GitHubProfile'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <Profile />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
