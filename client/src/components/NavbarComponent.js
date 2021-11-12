import { Container, Nav } from 'react-bootstrap';

import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">SocialMeetWork</Navbar.Brand>
                <div style={{}}> и няма Network-Metwork</div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse   id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        
                        <Nav.Link href="#home">All posts</Nav.Link>
                        <Nav.Link href="#link">My Profile</Nav.Link>

                        <Nav.Link href="#home">Register</Nav.Link>
                        <Nav.Link href="#link">Login</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavbarComponent;