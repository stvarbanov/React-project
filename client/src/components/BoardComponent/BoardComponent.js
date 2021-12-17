/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import ListOfNotesComponent from "../Card/ListOfNotesComponent.js"
import './Board.css'
import { useEffect, useState } from 'react';
import { getToDos, getInProgress, getDone } from '../../services/notesService.js';
import AddCardComponent from '../Card/addCard.js';

const BoardComponent = ({
    userId
}) => {

    const [toDoNotes, setToDoNotes] = useState([]);
    const [inProgressNotes, setInProgressNotes] = useState([]);
    const [doneNotes, setDoneNotes] = useState([]);

    const [added, setAdded] = useState(false);
    if (added === true) {
        window.location.reload(false);
        setAdded(false);
    }
    useEffect(async () => {
        await getToDos()
            .then(res => res.json())
            .then((data) => {
                setToDoNotes(data.todos);
            });
        await getInProgress()
            .then(res => res.json())
            .then((data) => {
                setInProgressNotes(data.inprogress);
            });
        await getDone()
            .then(res => res.json())
            .then((data) => {
                setDoneNotes(data.done);
            });


    }, []);


    return (<Container >
        <Row >
            <Col >
                <h4 className="col-title">TO DO</h4>
                <ListOfNotesComponent userId={userId} notes={toDoNotes} />
                {userId ? (
                    <AddCardComponent userId={userId} setAdded={setAdded} />
                ) : (
                    <h4></h4>
                )}
            </Col>

            <Col>
                <h4 className="col-title">IN PROGRESS</h4>
                <ListGroup>
                    <ListOfNotesComponent userId={userId} notes={inProgressNotes} />
                </ListGroup>
            </Col>
            <Col>
                <h4 className="col-title">DONE</h4>
                <ListGroup>
                    <ListOfNotesComponent userId={userId} notes={doneNotes} />
                </ListGroup>
            </Col>

        </Row>
    </Container>
    );
}

export default BoardComponent;