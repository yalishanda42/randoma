import randoma from './randoma.png';
import './App.css';
import { useState } from 'react';

function App() {
  const [isDice, setIsDice] = useState(false)
  const [dice, setDice] = useState(1)
  const [diceSides, setDiceSides] = useState(6)
  const [minValue, setMinValue] = useState(2)
  const [maxValue, setMaxValue] = useState(2)
  const [result, setResult] = useState(null)
  return (
    <div className="App">
      <header className="App-header">
        <RandomaMeme result={result} />
        <div id="dice">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <select>
            <option value="2">d2</option>
            <option value="4">d4</option>
            <option selected value="6">d6</option>
            <option value="8">d8</option>
            <option value="10">d10</option>
            <option value="12">d12</option>
            <option value="20">d20</option>
            <option value="100">d100</option>
          </select>
          <button onClick={() => setResult(2)}>Хвърли</button>
        </div>
        <h3>Резултат: {result}</h3>
      </header>
    </div>
  );
}

function RandomaMeme(props) {
  if (props.result == 2) {
    return <img src={randoma} className="App-logo" alt="logo" />
  }
  return null;
}

export default App;
