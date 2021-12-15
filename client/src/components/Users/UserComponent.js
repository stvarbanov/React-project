
const UserComponent = ({
user
}) => {

return (
    <div className="user">
        <h4>Username: {user.username}</h4>
        <h4>Email: {user.email} </h4>
        <h4>Color: {user.color}</h4>
        <h4>Notes count: {user.notes.length} </h4>
    </div> 


);
}

export default UserComponent;