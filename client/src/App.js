import './App.css';
import BoardComponent from './components/BoardComponent/BoardComponent.js';
import HeaderComponent from './components/Header/HeaderComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/CarouselComponent/CarouselComponent.js';
import LoginComponent from './components/Auth/Login/LoginComponent.js';
import RegisterComponent from './components/Auth/Register/RegisterComponent.js';
import MyNotesComponent from './components/MyNotes/MyNotesComponent.js';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AuthContext } from '../src/contexts/AuthContext.js';

function App() {

  
  const [user, setUser] = useState({
    id: "",
    email: "",
    username: ""
  });


  const onLogin = (authData) => {

    console.log(authData);
    setUser(authData);

    console.log(user);
  }
  const onLogout = () => {
    console.log('on logout');
  }

  return (
    <AuthContext.Provider value>

      <div className="App">
        <HeaderComponent username={user.username} />

        <main>
          <Routes>
            <Route path="/board/" element={<BoardComponent />} />
            <Route path="/" element={<CarouselComponent />} />
            <Route path="/auth/login" element={<LoginComponent onLogin={onLogin} />} />
            <Route path="/auth/register" element={<RegisterComponent />} />
            <Route path="/notes/my-notes" element={<MyNotesComponent />} />


          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}


export default App;
