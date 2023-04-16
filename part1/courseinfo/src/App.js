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
  const [part1, part2, part3] = props.parts
  return (
    <>
      <Part partName={part1.name} exercisesNumber={part1.exercises} />
      <Part partName={part2.name} exercisesNumber={part2.exercises} />
      <Part partName={part3.name} exercisesNumber={part3.exercises} />
    </>
  )
}

const Total = (props) => {
  const [part1, part2, part3] = props.parts
  return (
    <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
