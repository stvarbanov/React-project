import { Container, Navbar, Nav } from 'react-bootstrap';
import './Header.css'
const HeaderComponent = ({
    navigationChangeHandler

}) => {


    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">Kanban Board</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>

                        <Nav.Link href="/board/">Board</Nav.Link>
                        <Nav.Link href="/notes/my">My Notes</Nav.Link>
                        <Nav.Link href="/auth/logout">Logout</Nav.Link>


                        <Nav.Link href="/auth/login">Login</Nav.Link>
                        <Nav.Link href="/auth/register">Register</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default HeaderComponent;