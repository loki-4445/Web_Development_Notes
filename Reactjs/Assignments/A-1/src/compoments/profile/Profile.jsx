import './Profile.css'
function Profile(props){
    const {profile}=props
    return(
        //destructuring
        <div>
            <div className="card">
                <div className="i1">
                <img src={profile.image} className='img1'/>
                <img src={profile.image1} className='img2' />
                </div>
                <h2>{profile.title}</h2>
                <p>{profile.body}</p>
                <h3>&#128100; {profile.person}</h3>
                <h3>&#128197;{profile.date}</h3>
            </div>
        </div>
    )
}
export default Profile