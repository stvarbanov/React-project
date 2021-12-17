/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getUserNotes } from '../../services/notesService.js';
import ListOfNotesComponent from '../Card/ListOfNotesComponent.js';
import UserComponent from '../../components/Users/UserComponent.js';

import './MyNotes.css';

const MyNotesComponent = ({
    user, userId
}) => {

    const [myNotes, setmyNotes] = useState([]);

    let color = user.color;
    const styleRules = { background: color };


    useEffect(async () => {
        await getUserNotes(userId)
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                setmyNotes(data.notes);
            });
    }, []);


    return (
        <div className='my-notes-list'>
            <Container >
                <h4 className='col-title-text'>MY NOTES </h4>
                <ListOfNotesComponent userId={userId} notes={myNotes} />
            </Container>
        </div>
    );
}

export default MyNotesComponent;