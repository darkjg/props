

function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
}

function completedTask() {

}


function task({ tasks }) {
    

    return (
        <>
            <ul>{tasks.map((tarea) => {
                return (<><li key={tarea.text}>{tarea.text}</li></>)
            })}</ul>
        </>
    )

}
export default task
