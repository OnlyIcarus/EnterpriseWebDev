import React, { useState, useRef, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid';
import './App.css'

export default function App() {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const emailRef = useRef()
  const loginEmailRef = useRef()
  const loginPassRef = useRef()
  const casualWorkersRef = useRef()
  const casualWorkerPayRef = useRef()
  const averageCasualHoursRef = useRef()
  const standardWorkersRef = useRef()
  const standardWorkerPayRef = useRef()
  const averageStandardHoursRef = useRef()
  const expertWorkersRef = useRef()
  const expertWorkerPayRef = useRef()
  const averageExpertHoursRef = useRef()
  const physicalAssetsRef = useRef()

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
    }).then(function (response) {
      alert("Succesfully Registered User");
    }).catch(function (error) {
      alert("Something went wrong, please try again");
    })

  }

  function switchPageLogin() {
    if (document.getElementById('register-container')) {

      if (document.getElementById('register-container').style.display === 'none') {
          document.getElementById('register-container').style.display = 'block';
          document.getElementById('login-container').style.display = 'none';
          document.getElementById('register-button').textContent = 'Already a User? Login Here';
      }
      else {
          document.getElementById('register-container').style.display = 'none';
          document.getElementById('login-container').style.display = 'block';
          document.getElementById('register-button').textContent = 'Back to Registration';
      }
    }
  }

  function handleLogin() {
    const email = loginEmailRef.current.value;
    const password = loginPassRef.current.value;

    fetch("auth/signin",
    {
      headers: {'Content-Type': 'application/json'},
      method: "POST",
      body: JSON.stringify( { email: email, password: password} )
    }).then(function (response) {
      if (response.status === 401) {
        alert ("Wrong email and password combination");
      } else {
        alert("You have logged in succesfully");
        document.getElementById('register-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('register-button').style.display = 'none';
        document.getElementById('casual-workers').style.display = 'inline-block';
        document.getElementById('casual-worker-pay').style.display = 'inline-block';
        document.getElementById('average-casual-hours').style.display = 'inline-block';
        document.getElementById('standard-workers').style.display = 'inline-block';
        document.getElementById('standard-worker-pay').style.display = 'inline-block';
        document.getElementById('average-standard-hours').style.display = 'inline-block';
        document.getElementById('expert-workers').style.display = 'inline-block';
        document.getElementById('expert-worker-pay').style.display = 'inline-block';
        document.getElementById('average-expert-hours').style.display = 'inline-block';
        document.getElementById('save-button').style.display = 'block';
        document.getElementById('calculate').style.display = 'block';
        document.getElementById('signout-button').style.display = 'block';
      }
    })
  }

  function handleSignout() {
    if (window.confirm('Are you sure you want to sign out?') === true) {
      console.log('Signed Out')
      fetch("auth/signout",
      {
        headers: {'Content-Type': 'application/json'},
        method: "GET"
      }).then(function (response) {
        alert('Succesfully signed out')
        document.getElementById('register-container').style.display = 'block';
        document.getElementById('register-button').style.display = 'block';
        document.getElementById('signout-button').style.display = 'none';
      })
    } else {
      return;
    }
    return;
  }

  function saveQuote() {
    const casualWorkers = casualWorkersRef;
    const casualWorkerPay = casualWorkerPayRef;
    const averageCasualHours = averageCasualHoursRef;
    const standardWorkers = standardWorkersRef;
    const standardWorkerPay = standardWorkerPayRef;
    const averageStandardHours = averageStandardHoursRef;
    const expertWorkers = expertWorkersRef;
    const expertWorkerPay = expertWorkerPayRef;
    const averageExpertHours = averageExpertHoursRef;

    fetch("api/quote",
    {
      headers: {'Content-Type': 'application/json'},
      type: 'cors',
      method: "POST",
      body: JSON.stringify( { 
        casual_workers: casualWorkers, 
        casual_worker_pay: casualWorkerPay, 
        average_casual_hours: averageCasualHours, 
        standard_workers: standardWorkers, 
        standard_worker_pay: standardWorkerPay, 
        average_standard_hours: averageStandardHours, 
        expert_workers: expertWorkers, 
        expert_worker_pay: expertWorkerPay, 
        average_expert_hours: averageExpertHours
      })
    }).then(function (response) {
      alert("Succesfully Input Quote");
    }).catch(function (error) {
      alert("Something went wrong, please try again");
    })
  }

  function calculateQuote() {
    console.log(1)
  }

  return (
    <div id="container">
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
            <input ref={loginEmailRef} type="text" placeholder="Email..." className="inputLogin" />
            <br />
            <input ref={loginPassRef} type="password" placeholder="Password..." className="inputLogin" />
          </div>
          <button id="register-button" onClick={handleLogin}>Log In</button>
        </div>
      </div>
      <div id="main-body">
        <div id="calculate-form">
          <div id="inputs">
            <input id="casual-workers" ref={casualWorkersRef} type="number" placeholder="Number of Casual Workers" />
            <input id="casual-worker-pay" ref={casualWorkerPayRef} type="number" placeholder="Average pay for casual workers" />
            <input id="average-casual-hours" ref={averageCasualHoursRef} type="number" placeholder="Average hours worked by casual workers" />
            <br />
            <input id="standard-workers" ref={standardWorkersRef} type="number" placeholder="Number of Standard Workers" />
            <input id="standard-worker-pay" ref={standardWorkerPayRef} type="number" placeholder="Average pay for standard workers" />
            <input id="average-standard-hours" ref={averageStandardHoursRef} type="number" placeholder="Average hours worked by standard workers" />
            <br />
            <input id="expert-workers" ref={expertWorkersRef} type="number" placeholder="Number of Expert Workers" />
            <input id="expert-worker-pay" ref={expertWorkerPayRef} type="number" placeholder="Average pay for expert workers" />
            <input id="average-expert-hours" ref={averageExpertHoursRef} type="number" placeholder="Average hours worked by expert workers" />
          </div>
          <button id="save-button" onClick={saveQuote}>Save</button>
          <button id="calculate" onClick={calculateQuote}>Calculate</button>
        </div>
        <div id="center">
          <div id="signout-button" onClick={handleSignout}>Sign Out</div>
        </div>
      </div>
    </div>
  )
}