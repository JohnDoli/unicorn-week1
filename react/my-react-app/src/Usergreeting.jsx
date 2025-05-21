
function UserGreeting(props) {
    
    if (props.isLoggedIn) {
        return <p>Wellcome back {props.username}</p> 
    }
    else {
        return <p>Not logged in</p>
    }
}

export default UserGreeting