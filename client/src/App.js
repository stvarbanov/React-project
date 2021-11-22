import './App.css';
import BoardComponent from './components/BoardComponent/BoardComponent.js';
import HeaderComponent from './components/Header/HeaderComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/CarouselComponent/CarouselComponent.js';
import LoginComponent from './components/Auth/Login/LoginComponent.js';
import RegisterComponent from './components/Auth/Register/RegisterComponent.js';
import MyNotesComponent from './components/MyNotes/MyNotesComponent.js';
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
          <Route path="/board/" element={<BoardComponent />} />
          <Route path="/" element={<CarouselComponent />} />
          <Route path="/auth/login" element={<LoginComponent />} />
          <Route path="/auth/register" element={<RegisterComponent />} />
          <Route path="/auth/register" element={<MyNotesComponent />} />
          

        </Routes>
      </main>
    </div>
  );
}


export default App;
