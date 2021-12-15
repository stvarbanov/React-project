/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getUserNotes } from '../../services/notesService.js';
import ListOfNotesComponent from '../Card/ListOfNotesComponent.js';

import './MyNotes.css';
import CardComponent from '../Card/CardComponent.js';
const MyNotesComponent = ({
    userId
}) => {

    const [myNotes, setmyNotes] = useState([]);

    useEffect(async () => {
        await getUserNotes(userId)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setmyNotes(data.notes);
            });
    }, []);


    return (
        <Container >
            <h4>My notes </h4>
            <ListOfNotesComponent userId={userId} notes={myNotes} />

        </Container>
    );
}

export default MyNotesComponent;