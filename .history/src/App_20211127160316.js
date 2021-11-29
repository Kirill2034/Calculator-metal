import './App.css';
import {BtnRadio} from './components/BtnRadio';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h2>Калькулятор</h2>
      </div>
      <div className="calculator">
        <BtnRadio value="Золото"/>
      </div>
    </div>
  );
}

export default App;