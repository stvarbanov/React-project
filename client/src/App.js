import './App.css';
import BoardComponent from './components/BoardComponent/BoardComponent.js';
import HeaderComponent from './components/Header/HeaderComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/CarouselComponent/CarouselComponent.js';

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
          <CarouselComponent></CarouselComponent>
          <BoardComponent></BoardComponent>

        </main>


      </header>
    </div>
  );
}

export default App;
