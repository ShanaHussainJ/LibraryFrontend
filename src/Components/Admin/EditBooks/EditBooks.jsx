import React from "react";
// import {useParams} from 'react-router-dom'

function EditBooks() {

    // const {id} = useParams()
  return (
    <div className="center" style={{ height: "627px", top: "55%" }}>
      <h1>Edit Book</h1>
      <form action="" method="POST">
      <div className="txt_field">
          <input type="text" required></input>
          <label>Book Id</label>
        </div>
        <div className="txt_field ">
          <input type="text" required></input>
          <label>ISBN No</label>
        </div>
        <div className="txt_field">
          <input type="text" required></input>
          <label>Book Name</label>
        </div>
        <div className="txt_field">
          <input type="text" required></input>
          <label>Author</label>
        </div>
        <div className="txt_field">
          <input type="text" required></input>
          <label>Genres</label>
        </div>
        <div className="txt_field">
          <input type="number" required></input>
          <label>Total No of Copies</label>
        </div>
        <div className="txt_field">
          <input type="number" required></input>
          <label>No of Copies available for checkout</label>
        </div>
        <div className="txt_field">
        <input type="text" required></input>
          <label>Image</label>
        </div>
        <input type="submit" value="Done"></input>
      </form>
    </div>
  );
}

export default EditBooks;
