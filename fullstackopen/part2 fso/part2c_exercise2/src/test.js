// // 2.14
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const FilteredCountriesResult = ({ searchFilteredCountries, handleFilterChange }) => {
    if (searchFilteredCountries.length === 1) {
        const country = searchFilteredCountries[0]
        return (
            <div>
                <h2>{country.name.official}</h2>
                <div>area {country.area}</div>
                <h3>Languages</h3>
                <ul>
                    {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
                </ul>
                <div>{country.flag}</div>
                <h2>Weather in {country.name.official}</h2>
                <div>Temperature {country.weather.temperature} Celsius</div>
                <div>Wind {country.weather.wind}</div>
            </div>
        )
    }
    if (searchFilteredCountries.length > 10)
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    return (
        searchFilteredCountries.map(country => <div key={country.name.official} onClick={handleFilterChange}>
            {country.name.official}<button value={country.name.official}>show</button></div>)
    )
}

const WeatherResult = ({ country }) => {
    const [weather, setWeather] = useState([])

    useEffect(() => {
        console.log('effect')
        console.log(api_key)
        axios
            .get(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${api_key}`)
            // .get(`http://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid=${api_key}&query=${country.name.official}`)
            .then(response => {
                console.log('promise fulfilled', response.data)
                setWeather(response.data)
            })
    }, [country])

    return (
        <div>
            {/* <h2>Weather in {country}</h2>
        <div>Temperature {country.data.temp} Celsius</div>
        <div>Wind {country.data.wind_gust}</div> */}
        </div>
    )
}

const App = () => {
    const [searchFilter, setSearchFilter] = useState('')
    const [countries, setCountries] = useState([])

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setSearchFilter(event.target.value)
    }

    useEffect(() => {
        console.log('effect')
        axios.get('https://restcountries.com/v3.1/all').then(response => {
            console.log('promise fulfilled', response.data)
            setCountries(response.data)
        })
    }, [])

    const searchFilteredCountries = countries.filter(country => country.name.official.toLowerCase().includes(searchFilter))
    console.log(searchFilteredCountries)

    return (
        <div>
            find countries <input countries={countries} searchFilter={searchFilter} onChange={handleFilterChange} />
            <FilteredCountriesResult searchFilteredCountries={searchFilteredCountries} />
            {/* <WeatherResult searchFilteredCountries={searchFilteredCountries} /> */}
        </div>
    )

}

export default App
