
import { ListGroup } from 'react-bootstrap';
import UserComponent from './UserComponent.js';

const ListOfUserComponent = ({
    userData,
}) => {

    return (
        <ListGroup.Item>
            {userData.map((x) =>
                <UserComponent key={x._id} user={x} />
            )}
        </ListGroup.Item>
    );

}

export default ListOfUserComponent;