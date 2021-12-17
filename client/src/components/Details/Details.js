/* eslint-disable react-hooks/exhaustive-deps */

import './Details.css'
import { getDetails, deleteNote } from '../../services/notesService.js';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Row, Button, Col } from 'react-bootstrap';

const DetailsComponent = ({
    userId
}) => {
    const navigate = useNavigate();
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
    });

    const deleteNote = () => {

         deleteNote(noteId)
            .then(() => {
                // navigate('/board');
            });
    }

    return (

        <div className="details">
            {isOwner ? (
                <Row>
                    <h3> Edit your note: </h3>
                    <h3>Title: {info.title}</h3>
                    <h3>State: {info.state}</h3>
                    <h3>Color: {info.color}</h3>
                    <h3>Created: {info.createdAt.split('T')[0]}</h3>
                    <Row>
                        <Col>
                            <Button className="details-button-edit" href={'/notes/update/' + info._id} > Edit </Button>
                        </Col>
                        <Col>
                            <Button className="details-button-delete" href='#' onClick={deleteNote} > Delete </Button>
                        </Col>
                        {/* <Col>
                            <StateBtnComponent className='details-button-state' noteId={info._id} />
                        </Col> */}
                    </Row>
                </Row>
            ) : (
                <Row>
                    <h3> Note Details: </h3>
                    <h3>Title: {info.title}</h3>
                    <h3>State: {info.state}</h3>

                </Row>
            )}
        </div>

    );
}

export default DetailsComponent;