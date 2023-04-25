const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {

    const sum = parts.reduce((s, p) => {
        return s + p.exercises
    }, 0)

    return (
        <p>Number of exercises {sum}</p>
    )
}

const Part = ({ part }) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Content = ({ parts }) =>
    <>
        {parts.map(part => <Part key={part.id} part={part} />)}
    </>

const Course = ({ course }) => {
    const { name, parts } = course
    return (
        <>
            <Header course={name} />
            <Content parts={parts} />
            <Total parts={parts} />
        </>
    )
}

export default Course