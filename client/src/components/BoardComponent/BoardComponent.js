import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import CardComponent from "../Card/CardComponent.js"
import AddCardComponent from "../Card/addCard.js"
import './Board.css'
const BoardComponent = ({
    userId
}) => {

    return (<Container >
        <Row >
            <Col >
                <h4 className="col-title">TO DO</h4>
                <ListGroup>
                    <ListGroup.Item>

                        <CardComponent></CardComponent>
                         <AddCardComponent userId={userId} ></AddCardComponent>   
                    </ListGroup.Item>

                </ListGroup>
            </Col>

            <Col>
                <h4 className="col-title">IN PROGRESS</h4>
                <ListGroup>
                    <ListGroup.Item>

                        <CardComponent></CardComponent>

                    </ListGroup.Item>

                </ListGroup>
            </Col>
            <Col>
                <h4 className="col-title">DONE</h4>
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