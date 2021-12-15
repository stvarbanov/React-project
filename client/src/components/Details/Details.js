/* eslint-disable react-hooks/exhaustive-deps */

import './Details.css'
import { getDetails } from '../../services/notesService.js';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import StateBtnComponent from '../Card/StateBtn.js'


const DetailsComponent = ({
    userId
}) => {

    const [info, setInfo] = useState({});
    const [isOwner, setIsOwner] = useState(false);
    const { noteId } = useParams();

    useEffect(async () => {
        await getDetails(noteId)
            .then(res => res.json())
            .then((data) => {

                setInfo(data.data);

                if (data.data.owner[0]._id == userId) {
                    setIsOwner(true);

                } else {
                    setIsOwner(false);
                }
            });
    })

    return (

        <div className="details">
            {isOwner ? (
                <Row>
                    <h3>Title: {info.title}</h3>
                    <h3>State: {info.state}</h3>
                    <h3>Color: {info.color}</h3>
                    <h3>Created:{info.createdAt}</h3>
                    <StateBtnComponent />
                </Row>
            ) : (
                <Row>
                    <h3>No owner</h3>
                   
                </Row>
            )}
        </div>

    );
}

export default DetailsComponent;