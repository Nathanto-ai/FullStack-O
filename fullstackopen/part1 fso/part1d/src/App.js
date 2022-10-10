import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const positive = (props) => {
  return (props.good / total(props) * 100)
}

const average = (props) => {
  return ((props.good - props.bad) / total(props))
}

const total = (props) => {
  return (props.good + props.neutral + props.bad)
}

const Statistics = (props) => {
  return (
    <div>
      <tr>
        <td>good</td>
        <td>{props.good}</td>
      </tr>
      <tr>
        <td>neutral</td>
        <td>{props.neutral}</td>
      </tr>
      <tr>
        <td>bad</td>
        <td>{props.bad}</td>
      </tr>
      <tr>
        <td>all</td>
        <td>{total(props)}</td>
      </tr>
      <tr>
        <td>average</td>
        <td>{average(props)}</td>
      </tr>
      <tr>
        <td>positive</td>
        <td>{positive(props)}%</td>
      </tr>
    </div>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const clickGood = () => {
    setClicks({ ...clicks, good: clicks.good + 1 })
    console.log('value now', clicks.good)
  }
  const clickNeutral = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1 })
    console.log('value now', clicks.neutral)
  }
  const clickBad = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1 })
    console.log('value now', clicks.bad)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Give Feedback
        </h1>
        <div>
          <button onClick={clickGood}>Good</button>
          <button onClick={clickNeutral}>Neutral</button>
          <button onClick={clickBad}>Bad</button>
        </div>
        <h1>
          Statistics
        </h1>
        {Statistics(clicks)}


      </header>
    </div>
  );
}

export default App;
