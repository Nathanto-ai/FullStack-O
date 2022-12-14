
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <Courses courses={courses} />
  )
}

const Courses = (props) => {
  const { courses } = props
  console.log('props: ', courses)
  return (
    <div>
      <h1>Web Development Curreculum</h1>
      {courses.map(course =>
        <div>
          <h2>{course.name}</h2>
          <ul>
            {course.parts.map(part =>
              <li key={part.id}>{part.name} {part.exercises}</li>
            )}
            <li><strong>total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)}</strong></li>
          </ul>
        </div>
      )}
    </div>
  )
}


export default App;
