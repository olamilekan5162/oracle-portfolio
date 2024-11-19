// import night from '../assets/night.svg'
import day from '../assets/day.svg'

const Navbar = () => {
    return ( 
        <div className="nav-container">
            <h1>OO.</h1>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#skill">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><img src={day} alt="toggle mode" /></li>
            </ul>

        </div>
     );
}
 
export default Navbar;