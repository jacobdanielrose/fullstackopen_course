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
  const { part1, part2, part3 } = props
  return (
    <>
      <Part partName={part1.name} exercisesNumber={part1.exercises} />
      <Part partName={part2.name} exercisesNumber={part2.exercises} />
      <Part partName={part3.name} exercisesNumber={part3.exercises} />
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </div>
  );
}

export default App;
