import { Row, Col, Button } from 'react-bootstrap';
import './Card.css'
const CardComponent = () => {

    return (


        <div style={{ width: '500', height: '300' }}>
            <Row>
                <Col> <h4 >Clarify Requirements</h4></Col>
                <Col> <Button >Set in progress</Button>
                    <Button >Delete</Button> </Col>
            </Row>
        </div>

    );
}

export default CardComponent;