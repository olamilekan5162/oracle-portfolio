// import night from '../assets/night.svg'
import day from '../assets/day.svg'

const Navbar = () => {
    return ( 
        <div className="nav-container">
            <h1>RT.</h1>
            <ul className="nav-links">
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
                <li><img src={day} alt="toggle mode" /></li>
            </ul>

        </div>
     );
}
 
export default Navbar;