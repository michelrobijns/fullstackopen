import { useState } from 'react'

const Anecdote = ({ text, votes }) => {
  return (
    <>
      <div>{text}</div>
      <div>has {votes} votes</div>
    </>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
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

  const mostVoted = points.indexOf(Math.max(...points))

  const selectRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)

    setSelected(randomIndex)
  }

  const voteForAnecdote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote text={anecdotes[selected]} votes={points[selected]} />
      <Button onClick={voteForAnecdote} text={'vote'} />
      <Button onClick={selectRandomAnecdote} text={'next anecdote'} />
      <h2>Anecdote with most votes</h2>
      <Anecdote text={anecdotes[mostVoted]} votes={points[mostVoted]} />
    </div>
  )
}

export default App
