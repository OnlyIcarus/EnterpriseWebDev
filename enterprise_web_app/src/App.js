import React, { useState, useRef, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid';
import './App.css'

export default function App() {
  const [todos, setTodos] = useState([])
  const usernameRef = useRef()
  const passwordRef = useRef()
  const emailRef = useRef()

  function handleRegister() {
    let username = usernameRef.current.value
    let password = passwordRef.current.value
    let email = emailRef.current.value

    fetch("api/users",
    {
      headers: {'Content-Type': 'application/json'},
      type: 'cors',
      method: "POST",
      body: JSON.stringify( { name: username, password: password, email: email} )
    })

    if (response.status === 200) {
      alert("Succesfully registered");
    } else {
      alert("Something went wrong, please try again");
    }
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

  function handleLogin() {
    console.log(1);
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
        <button id="register-button" onClick={handleRegister}>Register</button>
      </div>
      <div id="login-container">
        <div id="login-input">
          <input ref={emailRef} type="text" placeholder="Email..." className="inputLogin" />
          <br />
          <input ref={passwordRef} type="password" placeholder="Password..." className="inputLogin" />
        </div>
        <button id="register-button" onClick={handleLogin}>Log In</button>
      </div>
    </div>
  )
}