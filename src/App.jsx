import { useSelector } from "react-redux";

function App() {
  const students = useSelector((state) => state.grades.students);

  return (
    <div>
      <h1>Students</h1>
      {Object.values(students).map((student) => (
        <div key={student.name}>
          {student.name}
        </div>
      ))}
    </div>
  );
}

export default App;