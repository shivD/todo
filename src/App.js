import React, { useState, useEffect } from "react"
import styled from "styled-components"

// imporing components


import AddTodo from "./componets/addTodo"
import TodoList from "./componets/toDoList"
import FilterTodo from "./componets/filterTodo"

const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
`

function App() {

  const [todotext, addTodoText] = useState("")
  const [todo, addTodo] = useState([])
  const [status, setStatus] = useState("All")
  const [todoFilter, setTodoFilter] = useState([])
  
  const setLocalStorage = () => {
    localStorage.setItem("todo", JSON.stringify(todo))
  }
  const getLocalStorage = () => {
    if (localStorage.getItem("todo" !== null)) {
      localStorage.setItem("todo", JSON.stringify([]))
    } else {
      const LocalStorage = localStorage.getItem("todo")
      addTodo(JSON.parse(LocalStorage))
    }
  }
  const TodoFilterHandler=()=>{
    switch(status) {
        case 'Completed':
            setTodoFilter(todo.filter(item=>item.completed===true))
          break;
        case "Uncompleted":
            setTodoFilter(todo.filter(item=>item.completed===false))
          break;
        default:
            setTodoFilter(todo);
            break;
      }
 }


  useEffect(() => {
    getLocalStorage();
  }, [])
  useEffect(() => {
    setLocalStorage()
    TodoFilterHandler();
    
  }, [todo, status])
  console.log(todoFilter);
  return (
    <Wrapper>
      <AddTodo
        todotext={todotext}
        addTodoText={addTodoText}
        addTodo={addTodo}
        todo={todo}
      />
      <FilterTodo
       todo={todo} 
       addTodo={addTodo}
       status={status}
       setStatus={setStatus}
       todoFilter={todoFilter}
       setTodoFilter ={setTodoFilter}
       setStatus={setStatus}
         />
      <TodoList
        todoFilter={todoFilter}
        setTodoFilter ={setTodoFilter}
        todo={todo} 
        addTodo={addTodo}
       
     
 
        
      />
    </Wrapper>
  )
}

export default App
