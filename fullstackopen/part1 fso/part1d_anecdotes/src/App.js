import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const mostVotes = (props) => {
  // debugger
  let index = 0
  let largest = 0
  for (let i = 0; i < props.length; i++) {
    if (props[i] > largest) {
      largest = props[i];
      index = i
    }
  }
  return index
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const nextAnecdote = () => {
    if (selected < anecdotes.length - 1) {
      setSelected(selected + 1)
    } else
      setSelected(0)

    console.log('selected:', selected)
  }

  const vote = () => {
    let copy = [...points]
    copy[selected] = copy[selected] + 1
    setPoints(copy)
    console.log('points:', points)

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <p>has {points[selected]} votes</p>
        <div>
          <button onClick={nextAnecdote}>Next Anecdote</button>
          <button onClick={vote}>vote</button>
        </div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[mostVotes(points)]}
      </header>
    </div>
  );
}

export default App;
