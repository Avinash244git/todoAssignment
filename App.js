import {useState} from 'react'
import {v4 as uuidv4} from 'uuid' // to get unique id using uuid package

import './App.css'

function TodoApp() {
  const [taskList, setTaskList] = useState([])
  const [taskInput, setTaskInput] = useState('')

  // adding new todo item to list
  const addTodo = () => {
    if (taskInput.trim() !== '') {
      const newItem = {
        id: uuidv4(),
        item: taskInput,
      }
      setTaskList([...taskList, newItem])
      setTaskInput('')
    }
  }

  // deleting the item on pressing remove button

  const removeTodo = index => {
    const updatedTodos = taskList.filter(eachValue => eachValue.id !== index)
    setTaskList(updatedTodos)
  }

  // adding input for todo
  const changeInputValue = event => {
    setTaskInput(event.target.value)
  }

  return (
    <div className="todo-container">
      <h1 className="heading">Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          className="todo-input"
          value={taskInput}
          onChange={changeInputValue}
          placeholder="Enter todo here"
        />
        <button onClick={addTodo} type="button" className="add-button">
          Add Todo
        </button>
      </div>
      <ul>
        {taskList.map(eachTodo => (
          <li key={eachTodo.id} className="list-item">
            {eachTodo.item}
            <button
              onClick={() => removeTodo(eachTodo.id)}
              type="button"
              className="remove-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp
