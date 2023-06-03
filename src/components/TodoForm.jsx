import { useReducer } from "react"

export const TodoForm=({todosDispatch})=>{

    let reducer=(state,action)=>{
        return  action
    }
    let initialState=''
    let [value,valueDispatch]=useReducer(reducer,initialState)

    //handle form submition
    const handleSubmit=(e)=>{
        e.preventDefault()
        todosDispatch({
            type:'add-task',
            payload:value
        })
        valueDispatch('')
    }

    return (
            <form className="todoForm" onSubmit={handleSubmit} >
                <input type="text" value={value} className="todo-input" placeholder="add task here" onChange={(e)=>{
                    valueDispatch(e.target.value)
                    
                }} />
                <button className="todo-btn" type="submit">Add task</button>
            </form>
    )
}