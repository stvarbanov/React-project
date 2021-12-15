
import { Button, DropdownButton, Dropdown, Col, Row } from 'react-bootstrap';
import './Card.css'

const StateBtnComponent = () => {

    const click = e => {

    }
    return (
        <div className="dropdown">
            <DropdownButton id="dropdown-basic-button" title="Change State">
                <Dropdown.Item href="#/action-1">To do</Dropdown.Item>
                <Dropdown.Item href="#/action-2">In Progress</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Done</Dropdown.Item>
            </DropdownButton>
        </div>

    );
}

export default StateBtnComponent;