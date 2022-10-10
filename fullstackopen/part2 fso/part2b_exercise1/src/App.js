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

  const display = showAll ?
    persons :
    persons.filter(person => person.name.includes(newFilter))

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        newFilter={newFilter}
        setNewFilter={setNewFilter}
        showAll={showAll}
        setShowAll={setShowAll}
      />

      <h3>Add a new</h3>

      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />

      <h3>Numbers</h3>

      <Persons
        show={display}
      />
    </div>
  )

}

const Filter = (props) => {

  const handleFilterChange = (event) => {
    props.setNewFilter(event.target.value)
    console.log('New Filter:', event.target.value)
    console.log('newFilter:', props.newFilter)

    if (event.target.value === '') {
      props.setShowAll(true)
    }
    else {
      props.setShowAll(false)
    }
  }
  return (
    <div>
      filter shown with <input onChange={handleFilterChange} />
    </div>
  )
}

const PersonForm = (props) => {
  console.log('props', props)

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = { name: props.newName, number: props.newNumber, id: props.persons.length + 1 }
    console.log('new Person', newPerson)

    if (props.persons.find(person => person.name === props.newName)) {
      alert(newPerson.name + " is already added to the phone book")
    }
    else {
      props.setPersons(props.persons.concat(newPerson))
      props.setNewName('')
      props.setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log('New Name:', event.target.value)
    props.setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log('New Number:', event.target.value)
    props.setNewNumber(event.target.value)
  }

  return (
    <div>
      <form onSubmit={addPerson}>
        <input
          value={props.newName}
          onChange={handleNameChange} />
        <input
          value={props.newNumber}
          onChange={handleNumberChange} />
        <button type="submit">Add New Person</button>
      </form>
    </div>
  )
}

const Persons = (props) => {

  return (
    <div>
      <ul>
        {props.show.map(person => <li key={person.id}>{person.name} {person.number} </li>)}
      </ul>
    </div>
  )
}


export default App
