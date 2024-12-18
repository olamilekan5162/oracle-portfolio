import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

const Hero = () => {
    
    return ( 
        <div className="hero-container">
            <h1 className="me">Hi, I am <span>Opeyemi Olalekan</span></h1>
            <h1 className="me-do">A Full Stack Engineer</h1>
            <p className='me-text'>I am Opeyemi Olalekan, a passionate Full-Stack Developer skilled in Python (Django), HTML, CSS, JavaScript, and Java. Currently, I am expanding my expertise by learning React to build modern, responsive web applications. I enjoy creating dynamic, user-friendly solutions and am always eager to take on new challenges and continue learning.</p>
            <div className="hero-links">
                <button>resume</button>
                <a href="https://github.com/olamilekan5162"> <img src={github} alt="github" /> </a>
                <a href="https://www.linkedin.com/in/opeyemi-olalekan-10864523a"> <img src={linkedin} alt="linkedin" /> </a>
            </div>
        </div>
     );
}
 
export default Hero;