import React from 'react'
import './App.css';
import { useState } from 'react';
import {v4 as uuid } from "uuid";


export default function App() {

  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  const toDoInputChange = (e) => {
    setTodo(e.target.value)
    console.log(e.target.value)
  }

  const onAddTodoClick  = () => {
    setTodoList([...todoList, {id: uuid(), todo: todo, isCompleted: false}]);
    setTodo('')
  }

  const onDeleteClick = (id) => {
    const filteredList = todoList.filter((removedItem) => {
      return (
        removedItem.id != id
      )
    })
    setTodoList(filteredList)
  }

  const onCheckClick = (id) => {
    const updatedTodoList = todoList.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo)
    console.log(updatedTodoList)
    setTodoList(updatedTodoList)
  }

  console.log(todoList)

  return (
    <div className='colo'>
      <input value={todo} onChange={toDoInputChange} placeholder='Add your wishlist here...' />
      <button onClick={() => onAddTodoClick(todo.id)}>Add</button>

      <div>
        {
          todoList && todoList.length > 0 && todoList.map(todo => (
            <div key={todo.id}>
              <label>
                <input  onClick={() => onCheckClick(todo.id)} type="checkbox" />
                <span className= {todo.isCompleted ? 'strike-through' : ''}>{todo.todo}</span>
              </label>
              <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}