//import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';

function App() {
  const styles = {
    color:'red',
    background:'blue',
  }
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={"./img/log.png"} className="App-logo" alt="logo" />
        <h1 style={styles}>
          HOLA soy santiago
        </h1>
        <button>boton</button>
      </header>
    </div>
  );
}

export default App;
