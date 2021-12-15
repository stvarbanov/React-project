import { Container, Navbar, Nav } from 'react-bootstrap';
import './Header.css'

const HeaderComponent = ({
    username, logout
}) => {
    

    let guestNavbar = (
        <Nav>
            <Nav.Link href="/auth/login">Login</Nav.Link>
            <Nav.Link href="/auth/register">Register</Nav.Link>
        </Nav>
    );

    let userNavbar = (
        <Nav>
            <Nav.Link> Hello, {username}</Nav.Link>
            <Nav.Link href="/notes/my-notes">My Notes</Nav.Link>
            <Nav.Link href="/team">Team Members</Nav.Link>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav>
    );


    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">Kanban Board</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>

                        <Nav.Link href="/board/">Board</Nav.Link>

                        {username
                            ? userNavbar
                            : guestNavbar
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default HeaderComponent;