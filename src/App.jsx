import { useState } from 'react';
import './App.css'
import Task from "./components/Task"
const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);
  const [tarea, setTarea] = useState("");
  const addTarea = (event) => {
    event.preventDefault();
    if (tarea != "" && !tasks.some(exist => (exist.text == tarea + ""))) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, text: tarea + "", completed: false }
      ])
    }
    return tasks
  }

  return (
    <>
      <form onSubmit={addTarea}>
        <input type='text' value={tarea} placeholder='Agregar nueva tarea' onChange={event => {
          setTarea(event.target.value)
        }}>
        </input>
        <button type="submit" >Add</button>
      </form>
      <Task tasks={tasks}></Task>

    </>
  );
};

export default App;
