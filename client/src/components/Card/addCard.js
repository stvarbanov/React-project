
import { useNavigate } from 'react-router-dom';
import { createNote } from '../../services/notesService.js';
import './Card.css'

const AddCardComponent = ({
    userId, setAdded
}) => {
    const navigate = useNavigate();

    const addCardClick = e => {
        e.preventDefault();

        const title = document.getElementById('title-add').value;
        createNote(title, userId);
        setAdded(true);

    }
    return (


        <div className="input">

            <form id='container-add'>
                <input type="text" className="input-field" placeholder="Quickly add a new note..." id="title-add" name="title-add" />

                <button onClick={addCardClick} className="card-button add">Create note</button>
            </form>

        </div>


    );
}

export default AddCardComponent;