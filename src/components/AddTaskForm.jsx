
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


function addTaskForm({ tasks }) {

    return (
        <>
            <form onSubmit={addTarea}>
                <input type='text' value={tarea} placeholder='Agregar nueva tarea' onChange={event => {
                    setTarea(event.target.value)
                }}>
                </input>
                <button type="submit" >Add</button>
            </form>
        </>
    )
}
export default addTaskForm