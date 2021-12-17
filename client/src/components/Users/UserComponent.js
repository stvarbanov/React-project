
const UserComponent = ({
    user
}) => {
    let color = user.color;
    const styleRules = { background: color };

    return (
        <div className="user" style={styleRules} >
            <h4>Username: {user.username}</h4>
            <h4>Email: {user.email} </h4>
        </div>

    );
}

export default UserComponent;