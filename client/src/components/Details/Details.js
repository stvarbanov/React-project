
import './Details.css'
import { getDetails } from '../../services/notesService.js';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


const DetailsComponent = ({
    userId
}) => {


    const [info, setInfo] = useState({});
    const { noteId } = useParams();

    useEffect(() => {

        getDetails(noteId)
            .then(res => res.json())
            .then(data => {
                // console.log(data.data)
                setInfo(data.data);
            })
            .catch(err => console.log(err));

        const ownerArr = info.owner;
        console.log(ownerArr);
    })




    //TODO if owner - editable data, else - only read
    return (

        <div className="input">
            <h3>Can not get owner...</h3>
            <h3>Created: {info.createdAt}</h3>
            <h3>Color: {info.color}</h3>
            <h3>State: {info.state}</h3>
            <h3>Title: {info.title}</h3>
        </div>

    );
}

export default DetailsComponent;