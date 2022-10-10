import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
const api_key = process.env.REACT_APP_API_KEY


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

// handles in input filter for countries
const FindCountries = (props) => {
  const [filter, setFilter] = useState('')

  // input handler
  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  // filtered array
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

// displays the countres with a filtered array
const DisplayCountries = (props) => {

  const { filteredArray } = props
  const [showCountry, setShowCountry] = useState(new Array(filteredArray.length).fill(false))

  // console.log('filteredArray', filteredArray)
  // console.log('showCountry', showCountry)


  // handle show country
  return (
    // check if filtered array is too long
    filteredArray.length > 10
      ? <div>Too many matches, specify another filter</div>
      : [
        // if filtered array is 1 element display
        filteredArray.length === 1
          ? <div>
            <h1 key={filteredArray.at(0).common}>{filteredArray.at(0).name.common}</h1>
            <li key={filteredArray.at(0).capital}>capital {filteredArray.at(0).capital}</li>
            <li key={filteredArray.at(0).area}>area {filteredArray.at(0).area}</li>
            <h4>languages:</h4>
            {Object.values(filteredArray.at(0).languages).map(language => <li key={language}>{language}</li>)}
            <img src={filteredArray.at(0).flags.png} />
            <WeatherResult country={filteredArray.at(0)} />
          </div>
          // if filtered array is between 1 and 10 elements
          : <div>
            {filteredArray.map(country => {
              return (
                <li key={country.ccn3}>
                  {country.name.common}
                  -<button onClick={() => {
                    // onClick swap showCountry
                    const temp = [...showCountry]
                    temp[filteredArray.indexOf(country)] = !temp[filteredArray.indexOf(country)]

                    console.log('temp', temp)
                    setShowCountry(temp)

                  }}>show</button>
                  <ShowCountryButton
                    country={country}
                    showCountry={showCountry}
                    filteredArray={filteredArray}
                  />
                </li>
              )
            }
            )
            }
          </div>
        // : filteredArray.map(country => <li key={country.ccn3}>{country.name.common}</li>)
      ]
  )
}

// function to show country information
const ShowCountryButton = (props) => {
  return (
    props.showCountry.at(props.filteredArray.indexOf(props.country))
      ?
      <div>
        <h1 key={props.country.common}>{props.country.name.common}</h1>
        <li key={props.country.capital}>capital {props.country.capital}</li>
        <li key={props.country.area}>area {props.country.area}</li>
        <h4>languages:</h4>
        {Object.values(props.country.languages).map(language => <li key={language}>{language}</li>)}
        <img src={props.country.flags.png} />
        <WeatherResult country={props.country} />
      </div>
      : ''

  )
}

const WeatherResult = ({ country }) => {
  const [weather, setWeather] = useState([])

  const apiTest = 'https://api.openweathermap.org/data/2.5/weather?q=' + country.capital + '&appid=' + api_key
  console.log(apiTest)

  useEffect(() => {
    console.log('effect')
    console.log(api_key)
    axios
      .get('https://api.openweathermap.org/data/2.5/weather?q=' + country.capital + '&appid=' + api_key)
      // .get(`http://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid=${api_key}&query=${country.name.official}`)
      .then(response => {
        console.log('promise fulfilled', response.data)
        setWeather(response.data)
      })
  }, [])

  console.log('weather', weather)
  // const temp = weather.main.temp - 273.15

  return (
    <div>
      {/* <h2>Weather in {weather.name}</h2>
      <div>Temperature {temp.toFixed(2)} Celsius</div>
      <img src={'https://openweathermap.org/img/wn/' + weather.weather.at(0).icon + '@2x.png'} />
      <div>Wind {weather.wind.speed} m/s</div> */}
    </div>
  )
}


export default App;
