import github from '../assets/github.svg'

const Profile = () => {
  return (
    <div className="project-container">
      <h1>PROJECTS</h1>
      <div className="project-wrapper">
        <div className="projects">
          <h1>Project 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nostrum consequatur neque quaerat</p>
          <p className="stack">Html Javascript Django</p>
          <div className="image-wrap">
            <img src={github} alt="github" />
          </div>
        </div>
        <div className="projects">
          <h1>Project 2</h1>
          
        </div>
        <div className="projects">
          <h1>Project 3</h1>
          
        </div>
      </div>
    </div>
    );
}
export default Profile;