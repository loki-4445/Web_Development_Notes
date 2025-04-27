    import './User.css'
    function User(props){
       const {user}=props
    return(
        <div className="card">
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <h2>{user.sec}</h2>


        </div>
    )
    }
    export default User