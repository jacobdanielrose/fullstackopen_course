import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameSearch, setNameSearch] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
      axios
        .post('http://localhost:3001/persons', personObject)
        .then(res => {
          setPersons(persons.concat(personObject))
          setNewName('')
          setNewNumber('')
        }
        )
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