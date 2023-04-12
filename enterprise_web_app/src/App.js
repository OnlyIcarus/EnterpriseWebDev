import React, { useState, useRef, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid';
import './App.css'

//const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function App() {

  var path = require('path');
  var express = require('express');
  var app = express();
  const PORT = 8080

  app.use(function ( req, res, next) {
    res.send('This page does not exist!')
  });

  app.listen(PORT, function () {
    console.log('Listening on http://localhost:'+PORT+'/');
  });

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
        <input ref={usernameRef} type="text" placeholder="Username..." id="input-user" />
        <br/>
        <input ref={passwordRef} type="text" placeholder="Password..." id="input-pass" />
      </div>
      <button id="login-button">Submit</button>
    </div>
  )
}