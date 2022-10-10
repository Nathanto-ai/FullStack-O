import logo from './logo.svg';
import './App.css';

function App() {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    }
    console.log(course)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>{course.name}</h1>
                <p>
                    {course.parts.at(0).name}{course.parts.at(0).exercises}
                </p>
                <p>
                    {course.parts.at(1).name}{course.parts.at(1).exercises}
                </p>
                <p>
                    {course.parts.at(2).name}{course.parts.at(2).exercises}
                </p>

            </header>
        </div>
    );
}

export default App;
