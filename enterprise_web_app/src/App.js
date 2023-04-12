import React, { useState, useRef, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid';
import TodoList from './TodoList'
import './App.css'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function App() {
  const [todos, setTodos] = useState([])
  const usernameRef = useRef()
  const passwordRef = useRef()

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //   if (storedTodos) setTodos(storedTodos)
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  // }, [todos])

  // function toggleTodo(id) {
  //   const newTodos = [...todos]
  //   const todo = newTodos.find(todo => todo.id === id)
  //   todo.complete = !todo.complete
  //   setTodos(newTodos)
  // }

  // function handleAddTodo(e) {
  //   const name = todoNameRef.current.value
  //   if (name === '') return
  //   setTodos(prevTodos => {
  //     return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
  //   })
  //   todoNameRef.current.value = null
  // }

  // function handleClearTodos() {
  //   const newTodos = todos.filter(todo => !todo.complete)
  //   setTodos(newTodos)
  // }

  return (
    <div id="login-container">
      <div id="login-input">
        <input ref={usernameRef} type="text" />
        <input ref={passwordRef} type="text" />
      </div>
      <button>Add Todo</button>
      <button>Clear Complete</button>
    </div>
  )
}