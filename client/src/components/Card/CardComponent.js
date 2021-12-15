/* eslint-disable react-hooks/exhaustive-deps */
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';
import './Card.css'
import { useState, useEffect } from 'react';

const CardComponent = ({
    note, userId
}) => {

    let color = note.color;
    const styleRules = { background: color };
    const [isOwner, setIsOwner] = useState(false);
    
    useEffect(() => {

        if (note.owner.indexOf(userId) > -1) {
            console.log('here');
            setIsOwner(true);
        }
    })

    return (
        <div className="card">
            {userId ? (
                <div id='container' style={styleRules}>
                    <h4 id="card-title">{note.title}</h4>
                    
                    <DropdownButton id="dropdown-basic-button" title="Change State">
                        <Dropdown.Item href="#/action-1">To do</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">In Progress</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Done</Dropdown.Item>
                    </DropdownButton>
                    {/* <button className="card-button state">Move state</button> */}
                    {/* <button className="card-button-delete" >Delete</button> */}

                    <Button className="card-button-see-details" href={'/notes/details/' + note._id} >Show Details</Button>
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