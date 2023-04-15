const Header = (props) => {
  return <h1>{props.course}</h1 >
}

const Part = (props) => {
  const { partName, exercisesNumber } = props;
  return (
    <p>
      {partName} {exercisesNumber}
    </p>
  )
}

const Content = (props) => {
  const {
    part1,
    exercises1,
    part2,
    exercises2,
    part3,
    exercises3
  } = props

  return (
    <>
      <Part partName={part1} exercisesNumber={exercises1} />
      <Part partName={part2} exercisesNumber={exercises2} />
      <Part partName={part3} exercisesNumber={exercises3} />
    </>
  )
}

const Total = (props) => {
  const { exercises1, exercises2, exercises3 } = props;
  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
}

export default App;
