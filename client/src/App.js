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
import TeamComponent from './components/TeamMembers/TeamComponent.js';
import DetailsComponent from './components/Details/Details.js';
// import { NotificationProvider } from './contexts/NotificationContext.js';
// import Notification from './components/Notification/Notification.js';

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
    alert('Logging out!')
    localStorage.clear();
    window.location.reload(false);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>

      {/* <NotificationProvider> */}
      <div className="App" notification>
        <HeaderComponent username={user.username} userd={user.id} logoutOnclick={logout} />

        <main>
          <Routes>
            <Route path="/board/" element={<BoardComponent userId={user.id} />} />
            <Route path="/" element={<CarouselComponent />} />

            <Route path="/auth/login" element={<LoginComponent isLogin={login} />} />
            <Route path="/auth/register" element={<RegisterComponent />} />

            <Route path="/notes/my-notes" element={<MyNotesComponent userId={user.id} />} />
            <Route path="/team" element={<TeamComponent userId={user.id} />} />
            <Route path="/notes/details/:noteId" element={<DetailsComponent userId={user.id} />} />

          </Routes>
        </main>
      </div>
      {/* </NotificationProvider> */}

    </AuthContext.Provider>
  );
}


export default App;
