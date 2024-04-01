import { useState } from 'react';
import './App.css'
import Task from "./components/Task"
import AddTaskForm from './components/AddTaskForm';
import task from './components/Task';
const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);
 
  const addTarea = (text) => {   
    if (text != "" && !tasks.some(exist => (exist.text == text))) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1,text, completed: false }
      ])
    }
 
  }
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  const marcarTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task));
  };
  return (
    <>
      <AddTaskForm onAdd={addTarea}></AddTaskForm>
      <ul>
        {tasks.map(task => {
          return (
            <Task 
              id={task.id}
              task={task}
              deleteTask={deleteTask}
              marcarTask={marcarTask}
            ></Task>
          )
        })}

      </ul>


    </>
  );
};

export default App;
