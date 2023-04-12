import React, { useState, useRef, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid';
import './App.css'

export default function App() {
  const [todos, setTodos] = useState([])
  const usernameRef = useRef()
  const passwordRef = useRef()

  function handleLogin() {
    alert('Attempting Login');
    let username = usernameRef.current.value
    let password = passwordRef.current.value

    var login = {
      "users": [
          {
              "name": "isaac", 
              "password": 1234567,
              "email": "mymail@mail.com"
          },
      ]
    }

    fetch('http://127.0.0.1:8000/api/users' + new URLSearchParams({
      name: 'isaac',
      password: '1234567',
      email: 'mymail@mail.com'
    }))

  return (
    <div id="login-container">
      <div id="login-input">
        <input ref={usernameRef} type="text" placeholder="Username..." id="input-user" />
        <br/>
        <input ref={passwordRef} type="text" placeholder="Password..." id="input-pass" />
      </div>
      <button id="login-button" onClick={handleLogin}>Submit</button>
    </div>
  )
}