import React from "react";
import "../Styles/login.css";
const Login = () => {
  return (
    <div>
      <div class="center">
        <h1>Login</h1>
        <form method="post">
          <div class="txt_field">
            <input type="email" required></input>
            <span></span>
            <label>Email</label>
          </div>
          <div class="txt_field">
            <input type="password" required></input>
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="Login"></input>
          <div class="signup_link">
            Not a member? <a href="#">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
