import React from 'react'
import {Link} from "react-router-dom"
function AddBooks() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h2 className="text-center">Add Book</h2>
                <form action="" method="POST" enctype="multipart/form-data">
                <div className="txt_field">
            <input type="email" required></input>
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input type="password" required></input>
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="Login"></input>
          <div className="signup_link">
            Not a member? <Link to={"/signup"}>Signup</Link>
          </div>

                    <button type="submit" class="btn btn-success mt-4">Submit</button>
                </form>
            </div>
        </div>

      </div>
    </div>
  )
}

export default AddBooks
