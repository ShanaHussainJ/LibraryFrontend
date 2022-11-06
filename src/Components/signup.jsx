import React from 'react'
import "../Styles/signup.css";
function Signup() {
  return (
    <div>
        <div>
      <div class="center">
        <h1>Create Account</h1>
        <form method="post">
        <div class="txt_field">
          <input type="text" required></input>
          <span></span>
          <label>Username</label>
        </div>
          <div class="txt_field">
            <input type="email" required></input>
            <span></span>
            <label>Email</label>
          </div>
          <div class="txt_fields">
          <label>DOB</label>
          <input type="date" class="date" required></input>
          <span></span>
          
        </div>
          <div class="txt_field">
            <input type="password" required></input>
            <span></span>
            <label>Password</label>
          </div>
          <div class="txt_field">
            <input type="password" required></input>
            <span></span>
            <label>Confirm Password</label>
          </div>
          <input type="submit" value="Signup"></input>
          <div class="login_link">
            Already have an account? <a href="#">Login</a>
          </div>
        </form>
      </div>
    </div>
      
    </div>
  )
}

export default Signup
