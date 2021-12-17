/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col } from 'react-bootstrap';
import ListOfUserComponent from '../Users/ListOfUsers.js';
import { useState, useEffect } from 'react';
import { getUsers } from '../../services/notesService.js';
import ListOfNotesComponent from '../Card/ListOfNotesComponent.js';
import SmallCardComponet from '../Card/SmallCardComponet.js';

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
            console.log(users);
    }, []);
    //TODO - show small notes for each user

    return (

        <Container >
            <Col>
                <div className='team-list'>
                    <h4 className='team-title'>USERS ON THIS BOARD</h4>
                    <ListOfUserComponent userId={userId} userData={users} />
                </div>
            </Col>
            <Col>
                <div className='team-notes-list'>
                  
                    {/* {users.map((x) =>
                    
                        <SmallCardComponet />
                    )} */}
                </div>
            </Col>
        </Container>
    );
}

export default TeamComponent;