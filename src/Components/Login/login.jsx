import axios from "../../axios";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/login.css";
const Login = ({setIsLoggedIn}) => {
  
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const details = {
      email,
      password,
    };

    axios({
      method: "post",
      url: "/user/login",
      data: details,
    })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("userId", response.data.id);
          localStorage.setItem("userRole", response.data.role);
          setIsLoggedIn();
          navigate("/home");
        } else {
          alert("Login failed!!!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input type="email" required ref={emailRef} />
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input type="password" required ref={passwordRef} />
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
