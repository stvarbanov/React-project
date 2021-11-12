import './App.css';
import NavbarComponent from './components/NavbarComponent.js';
import RegisterForm from './components/RegisterForm.js';
import { Container, Col, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div className="App">
      <NavbarComponent></NavbarComponent>

      <header className="App-header">

        <main>

          <Container>
            <Row>
              <Col lg={true}></Col>
            </Row>
            <Row>
              <Col ><RegisterForm></RegisterForm></Col>


            </Row>
          </Container>



          <form action="../api/connect" method="post"
            className="form">
            <button type="submit">Connected?</button>
          </form>

        </main>


      </header>
    </div>
  );
}

export default App;
