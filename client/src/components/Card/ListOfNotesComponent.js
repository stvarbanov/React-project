import { } from 'react-bootstrap';
import CardComponent from './CardComponent.js';
import './Card.css'
import { ListGroup } from 'react-bootstrap';

const ListOfNotesComponent = ({
    notes, userId
}) => {


    return (
        <ListGroup.Item>
            {notes.map((x) =>              
                <CardComponent key={x._id} note={x} userId={userId} />
            )}
            
        </ListGroup.Item>
    );

}

export default ListOfNotesComponent;