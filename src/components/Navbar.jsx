// import { useState } from 'react'
// import night from '../assets/night.svg'
// import day from '../assets/day.svg'

const Navbar = ({mode, toggleMode}) => {
    return ( 
        <div className="nav-container">
            <h1>OO.</h1>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#skill">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><img src={mode} alt="toggle mode" onClick = {toggleMode} /></li>
            </ul>

        </div>
     );
}
 
export default Navbar;