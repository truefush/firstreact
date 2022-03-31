//import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';

function App() {
  const styles = {
    color:'red',
    background:'blue',
  }
  let car = <img src={'./img/cart-regular-24.png'}></img>
  return (
    <div className="App">
    

      <NavBar name={car}/>
      <ItemListContainer greeting={'Hola Mundo'}/>

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
