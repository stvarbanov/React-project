import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import CardComponent from "../Card/CardComponent.js"
import './Board.css'
const BoardComponent = () => {

    return (



        <Container>
            <Row>
                <Col>
                    <h4>TO DO</h4>
                    <ListGroup>
                        <ListGroup.Item>

                            <CardComponent></CardComponent>

                        </ListGroup.Item>

                    </ListGroup>
                </Col>

                <Col>
                    <h4>IN PROGRESS</h4>
                    <ListGroup>
                        <ListGroup.Item>

                            <CardComponent></CardComponent>

                        </ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col>
                    <h4>DONE</h4>
                    <ListGroup>
                       
                        <ListGroup.Item>

                        <CardComponent></CardComponent>

                        </ListGroup.Item>

                    </ListGroup>
                </Col>

            </Row>
        </Container>
    );
}

export default BoardComponent;