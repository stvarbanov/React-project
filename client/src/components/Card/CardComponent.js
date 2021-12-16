/* eslint-disable react-hooks/exhaustive-deps */
import { Button, DropdownButton, Dropdown, Col, Row } from 'react-bootstrap';
import './Card.css'
import { useState, useEffect } from 'react';
import  StateBtnComponent  from '../Card/StateBtn.js'

const CardComponent = ({
    note, userId
}) => {

    let color = note.color;
    const styleRules = { background: color };
    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {

        if (note.owner.indexOf(userId) > -1) {
            setIsOwner(true);
        }
    })


    return (
        <div className="card">
            {userId ? (
                <div id='container' style={styleRules}>
                    <h4 id="card-title">{note.title}</h4>
                    <Row>
                        <Col>
                            <StateBtnComponent noteId={note._id} />
                            <Button className="card-button-see-details" href={'/notes/details/' + note._id} >...</Button>
                        </Col>
                    </Row>
                </div>
            ) : (
                <div id='container' style={styleRules}>
                    <h4 id="card-title">{note.title}</h4>
                </div>
            )
            }
        </div >


    );
}

export default CardComponent;