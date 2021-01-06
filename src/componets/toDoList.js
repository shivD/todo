import React from "react"
import styled from "styled-components"

const Listmenu = styled.div`
  width: 100%;
  ul {
    width: 100%;
    padding: 0;
    li {
      padding: 10px;
      background-color: #9c27b01f;
      list-style-type: none;
      flex: 1;
      display: flex;
      justify-content: space-between;
      margin-top: 1px;
      align-items: center;
      &.completed{

        span{
          text-decoration: line-through;
        }
      }
    }
  }
`
const Button = styled.button`
  background-color: orange;
  border: none;
  box-shadow: none;
  padding: 10px;
`

const TodoList = ({todoFilter, setTodoFilter, todo , addTodo }) => {
  
  const DeleteTodo = (id)=>{
    console.log(id);
    addTodo(todo.filter((item)=>item.id !== id))
  }

  const CompleteTodo = (todoItem) =>{
    
    addTodo(todo.map((item)=>{
      if(item.id === todoItem.id){
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }))
  }
  return (
    <Listmenu>
      <ul>
        {todoFilter.length > 0 &&
          todoFilter.map((todoItem, i) => (
            <li key={todoItem.id} className={`${todoItem.completed? 'completed':``}`}>
              <span>{todoItem.text} </span>
              <div>
                <Button onClick={CompleteTodo.bind(this, todoItem)}>{todoItem.completed ? 'Uncomplete':'Complete'}</Button> <Button onClick={DeleteTodo.bind(this, todoItem.id)}>Delete</Button>
              </div>
            </li>
          ))}
          {todoFilter.length == 0 && <li>No data Found</li>}
      </ul>
    </Listmenu>
  )
}

export default TodoList
