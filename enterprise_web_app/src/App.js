import React, { useState, useRef, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid';
import './App.css'

export default function App() {
  const [todos, setTodos] = useState([])
  const usernameRef = useRef()
  const passwordRef = useRef()
  const emailRef = useRef()

  function handleLogin() {
    alert('Attempting Login');
    let username = usernameRef.current.value
    console.log(username)
    let password = passwordRef.current.value
    let email = emailRef.current.value

    fetch("api/users",
    {
      headers: {'Content-Type': 'application/json'},
      type: 'cors',
      method: "POST",
      body: JSON.stringify( { name: {username}, password: {password}, email: {email} } )
    })
  }

  return (
    <div id="login-container">
      <div id="login-input">
        <input ref={usernameRef} type="text" placeholder="Username..." class="inputLogin" />
        <br/>
        <input ref={passwordRef} type="text" placeholder="Password..." class="inputLogin" />
        <br/>
        <input ref={emailRef} type="text" placeholder="E-Mail..." class="inputLogin" />
      </div>
      <button id="login-button" onClick={handleLogin}>Submit</button>
    </div>
  )
}