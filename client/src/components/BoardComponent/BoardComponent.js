import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import './Board.css'
const BoardComponent = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <h4>TO DO</h4>
                    <ListGroup>
                        <ListGroup.Item>

                            <Card >
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card></ListGroup.Item>

                    </ListGroup>
                </Col>
                
                <Col>
                <h4>IN PROGRESS</h4>
                    <ListGroup>
                        <ListGroup.Item>

                            <Card >
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card></ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col>
                <h4>DONE</h4>
                    <ListGroup>
                        <ListGroup.Item>

                            <Card >
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card></ListGroup.Item>

                    </ListGroup>
                </Col>
                
            </Row>
        </Container>
    );
}

export default BoardComponent;