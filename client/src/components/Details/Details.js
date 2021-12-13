
import './Details.css'
import { getDetails } from '../../services/notesService.js';
import { useNavigate, } from 'react-router';
import { useState } from 'react';

const DetailsComponent = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const id = '61b120a79d41484dcc6d421d';

    getDetails(id)
        .then(res => res.json())
        .then(note => {
            setData(note);
        });

    return (

        <div className="input">
            <h3>Title {data.title}</h3>
            <h3>State {data.state}</h3>
            <h3>Color {data.color}</h3>
            <h3>Owner {data.owner}</h3>
        </div>


    );
}


export default DetailsComponent;