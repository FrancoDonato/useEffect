import logo from './logo.svg';
import './App.css';
import { ComponentePrueba } from './components/ComponentePrueba';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <ComponentePrueba></ComponentePrueba>
      </header>
    </div>
  );
}

export default App;
