import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameSearch, setNameSearch] = useState('')

  const handleNewName = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNameSearch = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNameSearch(event.target.value)
  }


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    let personExist = false

    persons.forEach(person => {
      if (person.name === newName || person.number === newNumber) {
        personExist = true
      }
      else {
        personExist = false
      }
    })

    if (personExist) {
      alert(`Either ${newName} or ${newNumber} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(nameSearch))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={nameSearch} handle={handleNameSearch} />
      <h2>add a new</h2>
      <PersonForm
        handlePerson={addPerson}
        name={newName}
        number={newNumber}
        handleName={handleNewName}
        handleNumber={handleNewNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App