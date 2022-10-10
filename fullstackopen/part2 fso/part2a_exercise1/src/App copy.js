import logo from './logo.svg';
import './App.css';

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <Course course={course} />
  )
}

const display = () => {
  const course = App()
  const part = course.parts

  return (
    <div>
      <h1>{course.name}</h1>
      {
        part.map(t =>
          <li key={t.id}>
            {t.name} trololo {t.exercises}
          </li>
        )}
    </div>
  )
}

export default display;
