import axios from "../../axios";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Signup/signup.css";

function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const dobRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userName = nameRef.current.value;
    const email = emailRef.current.value;
    const dob = dobRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    const details = {
      userName,
      email,
      dob,
      password,
      confirmPassword,
    };

    if (password === confirmPassword) {
      axios({
        method: "post",
        url: "/user/signup",
        data: details,
      })
        .then((response) => {
          console.log(response);
          if (response.data) {
            navigate("/");
          } else {
            alert("Sorry...emailId already exists");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("password doesn't match");
    }
  };

  return (
    <div>
      <div className="center">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input type="text" required ref={nameRef} />
            <label>UserName</label>
          </div>
          <div className="txt_field">
            <input type="email" required ref={emailRef} />
            <label>Email</label>
          </div>
          <div className="txt_fields">
            <label>DOB</label>
            <input type="date" className="date" required ref={dobRef} />
          </div>
          <div className="txt_field">
            <input type="password" required ref={passwordRef} />
            <label>Password</label>
          </div>
          <div className="txt_field">
            <input type="password" required ref={confirmPasswordRef} />
            <label>Confirm Password</label>
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
