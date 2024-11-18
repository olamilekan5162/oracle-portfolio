import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Profile from './components/GitHubProfile'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const [githubUsers, setGithubUsers] = useState([])
  
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch();
      if (!res.ok){
        throw new Error ('Cannot fetch github Users');
        const data = res.json();
        setGithubUsers(data);
      }
    }
  })

  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <Profile githubUsers = {githubUsers} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
