import { Container, Row } from 'react-bootstrap';
import ListOfUserComponent from '../Users/ListOfUsers.js';
import { useState } from 'react';

import './Team.css';
const TeamComponent = () => {

    const [users, setUsers] = useState([]);

    //TODO get users

    return (<Container >
        <Row >
            <h4>Users in this team</h4>
            <ListOfUserComponent users={users} />
        </Row>
    </Container>
    );
}

export default TeamComponent;