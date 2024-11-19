import github from '../assets/github.svg'
import open from '../assets/open-in-new.svg'

const Profile = ({githubUsers}) => {

  return (
    <div className="profile-container">
      <h1>PROJECTS</h1>
      <div className="profile-wrapper">
        {githubUsers.map((user) => {
          return (
            <div className="profile" key={user.id}>
              <div className='profile-image-wrap'>
                <img src={user.avatar_url} alt="profile image" />
              </div>
              <p className="name">{user.login}</p>
              <p className="stacks">Followers: {Math.floor(Math.random() * 100)}</p>
              <div className="image-wrap">
                <a href={user.html_url}> <img src={github} alt="github" /> </a>
                <a href={user.html_url} target='blank'> <img src={open} alt="" /> </a>
              </div>
            </div>
          )

        })}
        
        
      </div>
    </div>
    );
}
export default Profile;