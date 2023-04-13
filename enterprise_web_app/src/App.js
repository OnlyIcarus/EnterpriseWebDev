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
    var x = document.getElementById("register-container");
    var y = document.getElementById("login-container");
    
    if (x.style.display === "block" && y.style.display === "none") {
      x.style.display = "none";
      y.style.display = "block";
    } else if (x.style.display === "none" && y.style.display === "block") {
      y.style.display = "none";
      x.style.display = "block";
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
      <div id="login-container" display="none">
        <div id="login-input">
          <input ref={emailRef} type="text" placeholder="Username..." className="inputLogin" />
          <br />
          <input ref={passwordRef} type="password" placeholder="Password..." className="inputLogin" />
        </div>
        <button id="login-button" onClick={handleLogin}>Log In</button>
      </div>
    </div>
  )
}