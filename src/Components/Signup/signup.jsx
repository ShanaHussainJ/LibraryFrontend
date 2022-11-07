import React from 'react'
import { Link } from 'react-router-dom';
import "../Signup/signup.css";
function Signup() {
  return (
    <div>
        <div>
      <div className="center">
        <h1>Create Account</h1>
        <form method="post">
        <div className="txt_field">
          <input type="text" required></input>
          <span></span>
          <label>Username</label>
        </div>
          <div className="txt_field">
            <input type="email" required></input>
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_fields">
          <label>DOB</label>
          <input type="date" className="date" required></input>
          <span></span>
          
        </div>
          <div className="txt_field">
            <input type="password" required></input>
            <span></span>
            <label>Password</label>
          </div>
          <div className="txt_field">
            <input type="password" required></input>
            <span></span>
            <label>Confirm Password</label>
          </div>
          <input type="submit" value="Signup"></input>
          <div className="login_link">
            Already have an account? <Link to={"/login"}>Login</Link>
          </div>
        </form>
      </div>
    </div>
      
    </div>
  )
}

export default Signup
