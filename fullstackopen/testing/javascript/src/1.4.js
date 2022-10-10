import logo from './logo.svg';
import './App.css';

function App() {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]
    console.log(parts)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>{course}</h1>
                <p>
                    {parts.at(0).name}{parts.at(0).exercises}
                </p>
                <p>
                    {parts.at(1).name}{parts.at(1).exercises}
                </p>
                <p>
                    {parts.at(2).name}{parts.at(2).exercises}
                </p>


            </header>
        </div>
    );
}

export default App;
