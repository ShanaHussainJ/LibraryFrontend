import React from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";
const Login = () => {
  return (
    <div>
      <div className="center">
        <h1>Login</h1>
        <form method="post">
          <div className="txt_field">
            <input type="email" required></input>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input type="password" required></input>
            <label>Password</label>
          </div>
          <input type="submit" value="Login"></input>
          <div className="signup_link">
            Not a member? <Link to={"/signup"}>Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
