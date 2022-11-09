import React from "react";
import { Link } from "react-router-dom";
import "../Signup/signup.css";
function Signup() {
  return (
    <div>
      <div className="center">
        <h1>Create Account</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required></input>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input type="email" required></input>
            <label>Email</label>
          </div>
          <div className="txt_fields">
            <label>DOB</label>
            <input type="date" className="date" required></input>
          </div>
          <div className="txt_field">
            <input type="password" required></input>
            <label>Password</label>
          </div>
          <input type="submit" value="Signup"></input>
          <div className="login_link m-4">
            Already have an account? <Link to={"/"}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
