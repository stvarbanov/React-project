/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import ListOfNotesComponent from "../Card/ListOfNotesComponent.js"
import './Board.css'
import { useEffect, useState } from 'react';
import { getToDos } from '../../services/notesService.js';

const BoardComponent = ({
    userId
}) => {

    const [toDoNotes, setToDoNotes] = useState([]);

    useEffect(async () => {
        await getToDos()
            .then(res => res.json())
            .then((data) => {
                setToDoNotes(data.todos);
            });
    }, []);

    console.log('this ' + toDoNotes);

    return (<Container >
        <Row >
            <Col >
                <h4 className="col-title">TO DO</h4>
                <ListGroup>

                    <ListOfNotesComponent notes={toDoNotes} userId={userId} />

                </ListGroup>
            </Col>

            <Col>
                <h4 className="col-title">IN PROGRESS</h4>
                <ListGroup>
                    <ListGroup.Item>



                    </ListGroup.Item>

                </ListGroup>
            </Col>
            <Col>
                <h4 className="col-title">DONE</h4>
                <ListGroup>

                    <ListGroup.Item>



                    </ListGroup.Item>

                </ListGroup>
            </Col>

        </Row>
    </Container>
    );
}

export default BoardComponent;