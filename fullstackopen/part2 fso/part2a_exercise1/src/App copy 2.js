import logo from './logo.svg';



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

const Course = (props) => {
  const { parts } = props.course
  const { course } = props
  console.log('props: ', props.course.name)
  console.log('parts: ', course)

  return (
    <div>
      <h1>Web Development Curreculum</h1>
      <ul>
        {parts.map(t => <li key={t.id}>{t.name} {t.exercises}</li>)}
        <li>total {parts.reduce((sum, order) => sum + order.exercises, 0)}</li>
      </ul>
    </div>
  )
}


export default App;
