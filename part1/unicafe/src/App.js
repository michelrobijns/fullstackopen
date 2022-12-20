import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad

  if (sum === 0) {
    return (
      <p>
        no feedback yet
      </p>
    )
  }

  const average = (good - bad) / sum
  const positive = good / sum * 100

  return (
    <p>
      good {good}<br/>
      neutral {neutral}<br/>
      bad {bad}<br/>
      all {sum}<br/>
      average {average}<br/>
      positive {positive} %
    </p>
  )
}

const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodByOne = () => {
    setGood(good + 1)
  }

  const increaseNeutralByOne = () => {
    setNeutral(neutral + 1)
  }

  const increaseBadByOne = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={increaseGoodByOne} text={'good'} />
      <Button onClick={increaseNeutralByOne} text={'neutral'} />
      <Button onClick={increaseBadByOne} text={'bad'} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
