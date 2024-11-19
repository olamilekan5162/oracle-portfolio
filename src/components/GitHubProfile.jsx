import github from '../assets/github.svg'
import open from '../assets/open-in-new.svg'

const Profile = ({githubUsers}) => {

  console.log(githubUsers)
  
  return (
    <div className="project-container">
      <h1>PROJECTS</h1>
      <div className="project-wrapper">
        <div className="projects">
          <h1>Project 1</h1>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nostrum consequatur neque quaerat</p>
          <p className="stacks">Html Javascript Django</p>
          <div className="image-wrap">
            <img src={github} alt="github" />
            <img src={open} alt="" />
          </div>
        </div>

        <div className="projects">
          <h1>Project 2</h1>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nostrum consequatur neque quaerat</p>
          <p className="stacks">Html Javascript Django</p>
          <div className="image-wrap">
            <img src={github} alt="github" />
            <img src={open} alt="" />
          </div>
        </div>

        <div className="projects">
          <h1>Project 3</h1>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nostrum consequatur neque quaerat</p>
          <p className="stacks">Html Javascript Django</p>
          <div className="image-wrap">
            <img src={github} alt="github" />
            <img src={open} alt="" />
          </div>
        </div>
        
      </div>
    </div>
    );
}
export default Profile;