import { Container, Nav } from 'react-bootstrap';

import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {

    const onNavClick = (e) => {
        e.preventDefault();

        if (e.target.tagName == 'A') {
            let url = new URL(e.target.href);

            console.log(url.pathname);

        }
    };

    return (
        <header onClick={onNavClick}>
            <Navbar bg="light navbar-fixed-top" sticky="top" expand="lg">
                < Container >
                    <Navbar.Brand href="/">SocialMeetWork</Navbar.Brand>
                    <div > и няма Network-Metwork</div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end" style={{ width: "100%" }}>

                            <Nav.Link href="#home">All posts</Nav.Link>
                            <Nav.Link href="/profile">My Profile</Nav.Link>

                            <Nav.Link href="/register">Register</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container >
            </Navbar >
        </header>


    );
}

export default NavbarComponent;