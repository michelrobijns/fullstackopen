import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value, unit }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {unit}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad

  if (sum) {
    const average = (good - bad) / sum
    const positive = good / sum * 100

    return (
      <table>
        <tbody>
          <StatisticLine text={'good'} value={good} />
          <StatisticLine text={'neutral'} value={neutral} />
          <StatisticLine text={'bad'} value={bad} />
          <StatisticLine text={'all'} value={sum} />
          <StatisticLine text={'average'} value={average} />
          <StatisticLine text={'positive'} value={positive} unit={'%'} />
        </tbody>
      </table>
    )
  }

  return (
    <p>
      No feedback given
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
    <>
      <h1>Give feedback</h1>
      <Button onClick={increaseGoodByOne} text={'good'} />
      <Button onClick={increaseNeutralByOne} text={'neutral'} />
      <Button onClick={increaseBadByOne} text={'bad'} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
