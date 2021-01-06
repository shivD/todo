import React from "react"
import styled from "styled-components"
import Firebase from  "../firebase"

const Button = styled.button`
  background-color: orange;
  border: none;
  box-shadow: none;
  padding: 10px;
`
const FormControl = styled.input`
  height: 28px;
`
const InputWrapper = styled.div`
  display: flex;
  * {
    &:first-child {
      flex: 1;
      width: 1%;
    }
  }
`

const AddTodo = ({ todotext, addTodo, addTodoText, todo }) => {
 Firebase.database().ref('totod').push(todo);
  const addTodoList = (e) => {
    e.preventDefault()
    if (todotext.trim() == "") {
      alert("Please enter todo name")
    } else {
      addTodo([
        ...todo,
        { text: todotext, completed: false, id: Math.random() * 1000 },
      ])
     
      addTodoText("")
    }
  }
  return (
    <form onSubmit={addTodoList}>
      <InputWrapper>
        <FormControl
          type="text"
          value={todotext}
          onChange={(e) => {
            addTodoText(e.target.value)
          }}
        />
        <Button type="submit">Add Todo</Button>
      </InputWrapper>
    </form>
  )
}

export default AddTodo
