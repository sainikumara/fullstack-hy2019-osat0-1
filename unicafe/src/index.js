import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>anna palautetta</h1>
      <Button handleClick={() => setGood(good + 1)} text="hyvä" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutraali" />
      <Button handleClick={() => setBad(bad + 1)} text="huono" />

      <h1>statistiikka</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ( {good, neutral, bad} ) => {
  const yhteensa = good + neutral + bad;

  if (yhteensa === 0) {
    return (
      <div>
        Ei yhtään palautetta annettu
      </div>
    )
  }

  const keskiarvo = (good - bad) / yhteensa;
  const positiivisia = ((good / yhteensa) * 100).toFixed(0) + '%';

  return (
    <table>
      <tbody>
      <Statistic text="hyvä" value={good} />
      <Statistic text="neutraali" value={neutral} />
      <Statistic text="huono" value={bad} />
      <Statistic text="yhteensä" value={yhteensa} />
      <Statistic text="keskiarvo" value={keskiarvo} />
      <Statistic text="positiivisia" value={positiivisia} />
      </tbody>
    </table>
  )
}

const Statistic = ( {text, value} ) => {
  return (
    <tr>
      <td>{text}</td><td>{value}</td>
    </tr>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
