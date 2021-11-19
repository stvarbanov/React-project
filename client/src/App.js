import './App.css';
import HeaderComponent from './components/Header/HeaderComponent.js';

function App() {


  const navigationChangeHandler = (path) => {

    console.log(path);

  }


  return (

    <div className="App">
      <HeaderComponent
        navigationChangeHandler={navigationChangeHandler}
      />

      <header className="App-header">

        <main>


        </main>


      </header>
    </div>
  );
}

export default App;
