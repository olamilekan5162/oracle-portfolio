import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

const Hero = () => {
    return ( 
        <div className="hero-container">
            <h1 className="me">Hi, I am <span>Opeyemi Olalekan</span></h1>
            <h1 className="me-do">A Full Stack Engineer</h1>
            <p className='me-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nostrum consequatur neque quaerat veritatis sed corrupti fugiat, veniam corporis vel ad quidem exercitationem amet soluta fugit iure dolores magnam totam, aliquam porro ex nisi error? Optio fuga repellendus magni neque.</p>
            <div className="hero-links">
                <button>resume</button>
                <img src={github} alt="github" />
                <img src={linkedin} alt="linkedin" />
            </div>
        </div>
        
        
     );
}
 
export default Hero;