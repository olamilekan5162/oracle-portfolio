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
      try{
        const res = await fetch('https://api.github.com/users');
        if (!res.ok){
          throw new Error ('Cannot fetch github Users');
        }
        const data = await res.json();
        setGithubUsers(data);    
      }
      catch (e){
        alert(e)
      }
    }

    fetchUsers()
    
  },[])

  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <Profile githubUsers = {githubUsers}  />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
