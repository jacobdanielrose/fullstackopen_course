import personService from './personService'

const handleClick = (id) => {
    return personService.deleteCall(id).then(() => { window.location.reload() })
}
const Persons = ({ persons }) => {
    return (
        <div>
            {persons.map(person => {
                return (
                    <>
                        <p key={person.name}>
                            {person.name} {person.number}
                            <button onClick={() => handleClick(person.id)}>delete</button>
                        </p>

                    </>
                )
            })}
        </div>
    )
}

export default Persons