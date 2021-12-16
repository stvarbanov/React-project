
import { Button, DropdownButton, Dropdown, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Card.css'

const StateBtnComponent = () => {
    const navigate = useNavigate();

    const setToDo = () => {



        navigate('/board');
    }
    const setInProgress = () => {



        navigate('/board');
    }
    const setDone = () => {



        navigate('/board');
    }
    

    return (
        <div className="dropdown">
            <DropdownButton id="dropdown-basic-button" title="Change State">
                <Dropdown.Item onClick={setToDo}>To do</Dropdown.Item>
                <Dropdown.Item onClick={setInProgress}>In Progress</Dropdown.Item>
                <Dropdown.Item onClick={setDone}>Done</Dropdown.Item>
            </DropdownButton>
        </div>

    );
}

export default StateBtnComponent;