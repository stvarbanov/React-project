import { Row, Col } from 'react-bootstrap';
import './Card.css'
const CardComponent = () => {

    return (


        <div className="card">

            <div id='conttainer'><h4 id="card-title">Clarify Requirements</h4>
                <button id="card-button-state">Set in progress</button>
                <button id="card-button delete" >Delete</button> </div>

        </div>

    );
}

export default CardComponent;