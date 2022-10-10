import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])

  // access api set countries \
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        // console.log('promise fufilled', response)
        setCountries(response.data)
        // console.log('response', response.data)

      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FindCountries
          temp={countries}
        />
      </header>
    </div>
  );
}
// {test.map(countries => <li key={countries.ccn3}>{countries.name.common}</li>)}

// 
const FindCountries = (props) => {
  const [filter, setFilter] = useState('')

  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const theFilter = props.temp.filter(course => {
    let countryName = JSON.stringify(course.name.common)
    return countryName.toLowerCase().includes(filter)
  })

  console.log('the filter', theFilter)

  return (
    <div>
      find countries <input value={filter} onChange={handleFilter} />
      <DisplayCountries filteredArray={theFilter} />
    </div>
  )
}

const DisplayCountries = (props) => {

  const { filteredArray } = props

  console.log('filteredArray', filteredArray)

  return (
    filteredArray.length > 10
      ? <div>Too many matches, specify another filter</div>
      : [
        filteredArray.length === 1
          ? <div>
            <h1 key={filteredArray.at(0).common}>{filteredArray.at(0).name.common}</h1>
            <li key={filteredArray.at(0).capital}>capital {filteredArray.at(0).capital}</li>
            <li key={filteredArray.at(0).area}>area {filteredArray.at(0).area}</li>
            <h4>languages:</h4>
            {Object.values(filteredArray.at(0).languages).map(language => <li key={language}>{language}</li>)}
            <img src={filteredArray.at(0).flags.png} />
          </div>
          : filteredArray.map(country => <li key={country.ccn3}>{country.name.common}</li>)
      ]
  )
}

export default App;
