import React, { useState, useRef, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid';
import './App.css'

//const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function App() {

  const [todos, setTodos] = useState([])
  const usernameRef = useRef()
  const passwordRef = useRef()

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