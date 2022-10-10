import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)


  const handleNameChange = (event) => {
    console.log('New Name:', event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log('New Number:', event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    console.log('New Filter:', event.target.value)
    console.log('newFilter:', newFilter)

    if (event.target.value === '') {
      setShowAll(true)
    }
    else {
      setShowAll(false)
    }
  }

  const addName = (event) => {
    event.preventDefault()
    const newPerson = { name: newName, number: newNumber, id: persons.length + 1 }
    console.log('name', newPerson)
    console.log('persons', persons)

    if (persons.find(person => person.name === newName)) {
      alert(newPerson.name + " is already added to the phone book")
    }
    else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const display = showAll ?
    persons :
    persons.filter(person => person.name.includes(newFilter))

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input
        value={newFilter}
        onChange={handleFilterChange} />
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange} />
          <div>
            number: <input
              value={newNumber}
              onChange={handleNumberChange} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {display.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
    </div>
  )
}

export default App
