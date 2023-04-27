import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './components/personService'
import Notification from './components/Notification'

import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameSearch, setNameSearch] = useState('')
  const [feedbackMessage, setFeedbackMessage] = useState('')


  useEffect(() => {
    personService
      .getAll()
      .then(data => {
        setPersons(data)
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
    let personIndex = 0

    persons.forEach((person, index) => {
      if (person.name === newName) {
        personExist = true
        personIndex = index
        console.log(person)
      }
    })

    if (personExist) {
      if (window.confirm(`${personObject.name} already exists. Do you want to replace the old number with a new one?`)) {
        personService
          .update(personIndex + 1, personObject)
          .then((data) => {
            const newPersons = [...persons]
            newPersons[personIndex] = personObject
            setPersons(newPersons)
            setNewName('')
            setNewNumber('')
            setFeedbackMessage(`${data.name} was updated!`)
            setTimeout(() => {
              setFeedbackMessage(null)
            }, 5000)
          })
      }
    } else {
      personService
        .create(personObject)
        .then((data) => {
          setPersons(persons.concat(data))
          setNewName('')
          setNewNumber('')

          setFeedbackMessage(`${data.name} was added!`)
          setTimeout(() => {
            setFeedbackMessage(null)
          }, 5000)
        })
    }
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(nameSearch))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={feedbackMessage} />
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