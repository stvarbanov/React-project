import './App.css';
import BoardComponent from './components/BoardComponent/BoardComponent.js';
import HeaderComponent from './components/Header/HeaderComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/CarouselComponent/CarouselComponent.js';
import { Routes, Route } from 'react-router-dom'

function App() {

  const navigationChangeHandler = (path) => {
    console.log(path);
  }

  return (

    <div className="App">
      <HeaderComponent
        navigationChangeHandler={navigationChangeHandler} />

      <main>
        <Routes>
          <Route path="/" element={<BoardComponent />} />
          {/* <Route path="/auth/login" element={<LoginComponent />} /> */}
          {/* <Route path="/auth/register" element={<RegisterComponent />} /> */}
        </Routes>
      </main>

    </div>
  );
}


export default App;
