import './App.css';
import NavbarComponent from './components/NavbarComponent.js';
import RegisterForm from './components/RegisterForm.js';
import { useState } from 'react';
import LoginComponent from './components/LoginComponent.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [page, setPage] = useState('/home');
  const routes = {

    '/register': <RegisterForm />,
    '/login': <LoginComponent />

  }

  const navigationChangeHandler = (path) => {

    console.log(path);
    setPage(path);
  }




  return (

    <div className="App">
      <NavbarComponent 
        navigationChangeHandler={navigationChangeHandler}
      />

      <header className="App-header">

        <main>

          {/* <Container>
            <Row>
              <Col lg={true}></Col>
            </Row>
            <Row>
              <Col ><RegisterForm></RegisterForm></Col>


            </Row>
          </Container> */}

          {routes[page] || <form action="../api/connect" method="post"
            className="form">
            <button type="submit">Connected?</button>
          </form>}




        </main>


      </header>
    </div>
  );
}

export default App;
