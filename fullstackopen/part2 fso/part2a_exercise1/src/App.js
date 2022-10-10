import courses from "./Courses";
const App = () => {

  return (
    <Courses courses={courses} />
  )
}

const Courses = (props) => {
  const { test } = props
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
