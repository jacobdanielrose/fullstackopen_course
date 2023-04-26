import personService from './personService'

const handleClick = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
        return personService.deleteCall(person.id).then(() => { window.location.reload() })
    }
}
const Persons = ({ persons }) => {
    return (
        <div>
            {persons.map(person => {
                return (
                    <>
                        <p key={person.name}>
                            {person.name} {person.number}
                            <button onClick={() => handleClick(person)}>delete</button>
                        </p>

                    </>
                )
            })}
        </div>
    )
}

export default Persons