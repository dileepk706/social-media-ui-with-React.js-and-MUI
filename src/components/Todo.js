
export const Todo = ({ task ,toggleComplete,deleteTodo}) => {

    return (
        <div className="todo">
            <p className={task.isComplete?'complete':""} onClick={()=>toggleComplete(task.id)}>{task.task}</p>
            <div className="btn">
                <button>update</button>
                <button onClick={()=>deleteTodo(task.id)}>delete</button>
            </div>

        </div>
    )
}