
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { setNoteToDo, setNoteInProgress, setNoteDone } from '../../services/notesService.js';


const StateBtnComponent = ({
    noteId
}) => {
    const navigate = useNavigate();

    const setToDo = () => {
        setNoteToDo(noteId)
            .then(res => res.json())
            .then(data => console.log(data));

        window.location.reload(false);
        navigate('/board');

    }

    const setInProgress = () => {
        setNoteInProgress(noteId)
            .then(res => res.json())
            .then(data => console.log(data));

        window.location.reload(false);
        navigate('/board');
    }

    const setDone = () => {

        setNoteDone(noteId)
            .then(res => res.json())
            .then(data => console.log(data));

        window.location.reload(false);
        navigate('/board');
    }


    return (
        <div className="dropdown">
            <DropdownButton id="dropdown-basic-button" title="Move">
                <Dropdown.Item onClick={setToDo}>To do</Dropdown.Item>
                <Dropdown.Item onClick={setInProgress}>In Progress</Dropdown.Item>
                <Dropdown.Item onClick={setDone}>Done</Dropdown.Item>
            </DropdownButton>
        </div>

    );
}

export default StateBtnComponent;