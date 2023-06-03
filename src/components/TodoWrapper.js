import { useReducer } from "react"
import { TodoForm } from "./TodoForm"
import { Todo } from "./Todo"
import { v4 as uuidv4  } from "uuid"

export const TodoWrapper=() =>{
    
    let initialState=[]
    let reducer=(state,action)=>{

        switch (action.type) {
            case 'add-task':
                if(!action.payload==''){
                    let Task={
                        id:uuidv4(),
                        task:action.payload,
                        isComplete:false,
                    }
                    return [...state,Task];
                }

            case 'markComple':
                return state.map(task=>{
                    return task.id==action.payload?{...task,isComplete:!task.isComplete}:task;
                })
            
                case 'delete':
                    console.log(action.payload);
                    return state.filter(task=> task.id!=action.payload)
                    
            default:
                break;
        }
     
    }

    let [todos,todosDispatch]=useReducer(reducer,initialState)

    //mark complete or uncomplete the task
    const toggleComplete=(id)=>{
        todosDispatch({type:'markComple',payload:id})
        let index=todos.findIndex(task=> task.id==id)
        let temp=todos[index]
        todos[index]=todos[0]
        todos[0]=temp
    }

    const deleteTodo=id=>{
        todosDispatch({type:'delete',payload:id})
    }
    return(
        <div className="todoWrapper">
            <TodoForm todosDispatch={todosDispatch}/>

            {/* show the todo list */}
            {todos.map(todo=>{
                return(
                    <Todo 
                    task={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}/>
                )
            })}
        </div>
    )
}