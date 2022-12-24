const Header = ({ name }) => {
  return (
    <h2>{name}</h2>
  )
}

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => <Part key={part.id} part={part}/>)}
    </>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((previous, current) => {
    return previous + current.exercises
  }, 0)

  return (
    <p><strong>Total of {total} exercises</strong></p>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default Course
