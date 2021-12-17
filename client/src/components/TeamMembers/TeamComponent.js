/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row } from 'react-bootstrap';
import ListOfUserComponent from '../Users/ListOfUsers.js';
import { useState, useEffect } from 'react';
import { getUsers } from '../../services/notesService.js';
import './Team.css';

const TeamComponent = ({
    userId
}) => {

    const [users, setUsers] = useState([]);

    useEffect(async () => {

        await getUsers()
            .then(res => res.json())
            .then((data) => {
                setUsers(data.data);
            });

    }, []);

    return (

        <Container >
            <div className='team-list'>
                <h4>Users in this team</h4>
                <ListOfUserComponent userId={userId} userData={users} />
            </div>
        </Container>
    );
}

export default TeamComponent;