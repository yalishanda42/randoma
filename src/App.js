import randoma from './randoma.png';
import './App.css';
import { useState } from 'react';

function App(props) {
  const [isDice, setIsDice] = useState(false)
  const [diceCount, setDiceCount] = useState(1)
  const [diceSides, setDiceSides] = useState(6)
  const [minValue, setMinValue] = useState(2)
  const [maxValue, setMaxValue] = useState(6)
  const [result, setResult] = useState(null)

  const generateResult = () => {
    if (isDice) {
      setResult(props.diceGenerator(diceCount, diceSides))
    } else {
      setResult(props.randomGenerator(minValue, maxValue))
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <RandomaMeme result={result} />
        <select
          onChange={(e) => setIsDice(e.target.value === 'true')}
          defaultValue={isDice}
        >
          <option value="false">Интервал</option>
          <option value="true">Зар / Монета</option>
        </select>
        {
          isDice
          ?
            <div id="dice">
              <select
                onChange={(e) => setDiceCount(e.target.value)}
                defaultValue={diceCount}
              >
                <option value="1">1</option>
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
              <select
                onChange={(e) => setDiceSides(e.target.value)}
                defaultValue={diceSides}
              >
                <option value="2">d2</option>
                <option value="4">d4</option>
                <option value="6">d6</option>
                <option value="8">d8</option>
                <option value="10">d10</option>
                <option value="12">d12</option>
                <option value="20">d20</option>
                <option value="100">d100</option>
              </select>
            </div>
          :
            <div id="range">
              <input
                type="number"
                placeholder="Минимална стойност"
                value={minValue}
                onChange={(e) => setMinValue(e.target.value)}
              />
              ~
              <input
                type="number"
                placeholder="Максимална стойност"
                value={maxValue}
                onChange={(e) => setMaxValue(e.target.value)}
              />
            </div>
        }
        <button onClick={generateResult}>
          {isDice ? "Хвърли" : "Генерирай"}
        </button>
        <ResultText result={result} />
      </header>
    </div>
  );
}

function RandomaMeme(props) {
  if (props.result === 2) {
    return <img src={randoma} className="App-logo" alt="logo" />
  }
  return null;
}

function ResultText(props) {
  if (typeof(props.result) === 'number') {
    return <h3>Резултат: {props.result}</h3>
  }
  if (props.result instanceof Array) {
    return <h3>Резултати: {props.result.join(', ')}</h3>
  }
  return null;
}

export default App;
