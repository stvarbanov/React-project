import './App.css';
import BoardComponent from './components/BoardComponent/BoardComponent.js';
import HeaderComponent from './components/Header/HeaderComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/CarouselComponent/CarouselComponent.js';
import LoginComponent from './components/Auth/Login/LoginComponent.js';
import RegisterComponent from './components/Auth/Register/RegisterComponent.js';
import MyNotesComponent from './components/MyNotes/MyNotesComponent.js';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from '../src/contexts/AuthContext.js';
import useLocalStorage from '../src/hooks/useLocalStorage.js';

const initialAuthState = {
  id: '',
  email: '',
  username: '',
};


function App() {

  const [user, setUser] = useLocalStorage('user', initialAuthState)

  const login = (authData) => {
    setUser(authData);
  }
  const logout = () => {
    console.log('on logout');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>

      <div className="App">
        <HeaderComponent username={user.username} />

        <main>
          <Routes>
            <Route path="/board/" element={<BoardComponent userId={user.id}/>} />
            <Route path="/" element={<CarouselComponent />} />
            <Route path="/auth/login" element={<LoginComponent isLogin={login} />} />
            <Route path="/auth/register" element={<RegisterComponent />} />
            <Route path="/notes/my-notes" element={<MyNotesComponent />} />


          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}


export default App;
