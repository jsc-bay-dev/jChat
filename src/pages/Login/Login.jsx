import React from 'react'
import './Login.css'
import { useState } from 'react';

const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currState === "Sign up") {
      signup(userName, email, password);
    } else {
      login(email, password);
    }
  }

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign up");

  return (
    <div className="login">
        <img src="" alt="image" className="logo" />
        <form action="" className="login-form">
            <h2>{currentState}</h2>
            {currentState==="Sign up" ? <input type="text" placeholder="username" className="form-input" required/> : null}
            <input type="email" placeholder="email address" className="form-input" required/>
            <input type="password" placeholder="password" className="form-input" required/>
            <button type="submit">Sign Up</button>
            <div className="login-term">
                <input type="checkbox" />
                <p>Agree to the terms of use & privacy policy</p>
            </div>
            <div className="login-forgot">
              {
                currentState==="Sign up" 
                  ?
                  <p className="login-toggle">Already have an account <span onClick={()=>setCurrentState("Login")}> Login here </span> </p>
                  :
                  <p className="login-toggle">Create an account <span onClick={()=>setCurrentState("Sign up")}> Click here </span> </p>
              }
            </div>
        </form>
    </div>
  )
}

export default Login