
import { ListGroup } from 'react-bootstrap';
import UserComponent from './UserComponent.js';

const ListOfUserComponent = ({
    users,
}) => {


    return (
        <ListGroup.Item>
            {users.map((x) =>              
                <UserComponent key={x._id} user={x}  />
            )}
            
        </ListGroup.Item>
    );

}

export default ListOfUserComponent;