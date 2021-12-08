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

    console.log('this ' + toDoNotes);

    return (<Container >
        <Row >
            <Col >
                <h4 className="col-title">TO DO</h4>

                <ListOfNotesComponent userId={userId} notes={toDoNotes} />
                {userId ? (
                    <AddCardComponent userId={userId} />
                ) : (
                    <h4></h4>
                )}

            </Col>

            <Col>
                <h4 className="col-title">IN PROGRESS</h4>
                <ListGroup>
                    <ListGroup.Item>
                        <ListOfNotesComponent userId={userId} notes={inProgressNotes} />
                    </ListGroup.Item>

                </ListGroup>
            </Col>
            <Col>
                <h4 className="col-title">DONE</h4>
                <ListGroup>
                    <ListGroup.Item>
                        <ListOfNotesComponent userId={userId} notes={doneNotes} />
                    </ListGroup.Item>

                </ListGroup>
            </Col>

        </Row>
    </Container>
    );
}

export default BoardComponent;