
import './Details.css'
import { getDetails } from '../../services/notesService.js';
import { useNavigate, } from 'react-router';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


const DetailsComponent = () => {

 
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {

        getDetails(id)
            .then(res => res.json())
            .then(note => {
                // console.log(note.note);
                setData(note.note);
            })
            .catch(err => console.log(err))
    })


    return (

        <div className="input">
            <h3>Title: {data.title}</h3>
            <h3>State: {data.state}</h3>
            <h3>Color: {data.color}</h3>
            <h3>Owner: {data.owner}</h3>
            <h3>Created: {data.createdAt}</h3>
        </div>


    );
}


export default DetailsComponent;