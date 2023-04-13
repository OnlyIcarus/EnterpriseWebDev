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
    console.log(password)
    let email = emailRef.current.value
    console.log(email)

    fetch("api/users",
    {
      headers: {'Content-Type': 'application/json'},
      type: 'cors',
      method: "POST",
      body: JSON.stringify( { name: username, password: password, email: email} )
    })
  }

  function switchPageLogin() {
    if (document.getElementById('register-container')) {

      if (document.getElementById('register-container').style.display == 'none') {
          document.getElementById('register-container').style.display = 'block';
          document.getElementById('login-container').style.display = 'none';
      }
      else {
          document.getElementById('register-container').style.display = 'none';
          document.getElementById('login-container').style.display = 'block';
      }
    }
  }

  return (
    <div id="login-page">
      <div id="login-button-container">
        <div id="register-button" onClick={switchPageLogin}>Already a User? Login Here</div>
      </div>
      <div id="register-container">
        <div id="register-input">
          <input ref={usernameRef} type="text" placeholder="Username..." className="inputLogin" />
          <br />
          <input ref={passwordRef} type="password" placeholder="Password..." className="inputLogin" />
          <br />
          <input ref={emailRef} type="text" placeholder="E-Mail..." className="inputLogin" />
        </div>
        <button id="register-button" onClick={handleLogin}>Register</button>
      </div>
      <div id="login-container">
        <div id="login-input">
          <input ref={emailRef} type="text" placeholder="Email..." className="input-login" />
          <br />
          <input ref={passwordRef} type="password" placeholder="Password..." className="input-login" />
        </div>
      </div>
    </div>
  )
}