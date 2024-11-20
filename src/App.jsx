import { useState, useEffect } from 'react'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Profile from './components/GitHubProfile'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

import night from './assets/night.svg'
import day from './assets/day.svg'

const App = () => {
  const [githubUsers, setGithubUsers] = useState(null)
  const [error, setError] = useState(null)
  const [mode, setMode] = useState(night);
  
  const toggleMode = () => {
    if (mode === night){
      setMode(day)
      alert('wiiiiii 😂😝 enjoy your dark mode, i no understand the use context jare😔')
    }else {
      setMode(night)
      alert('wiiiiii 😂😝 enjoy your day mode i no understand the use context seh 😔')
    }
  }
  
  useEffect(() => {
    const fetchUsers = async () => {
      try{
        const res = await fetch('https://api.github.com/users?per_page=5');
        if (!res.ok){
          throw new Error ('Cannot fetch github Users');
        }
        const data = await res.json();
        console.log(data)
        setGithubUsers(data);    
      }
      catch (e){
        setError(e.message)
      }
    }
    fetchUsers()
  },[])

  return (
    <div className={mode === night ? 'main-container-day' : 'main-container-night'}>
      <Navbar mode = {mode} toggleMode = {toggleMode} />
      <Hero />
      {error && <div className="error">{error}</div>}
      { githubUsers && <Profile githubUsers = {githubUsers}/>}
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
