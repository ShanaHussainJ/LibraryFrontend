import axios from "../../../axios";
import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddBooks = () => {
  const bookNameRef = useRef();
  const isbnNumberRef = useRef();
  const authorRef = useRef();
  const genresRef = useRef();
  const totalCopiesRef = useRef();
  const copiesForCheckoutRef = useRef();
  const imageRef = useRef();

  const navigate = useNavigate();


  useEffect(() => {
    if(!localStorage.getItem("isLoggedIn"))
    navigate("/")
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookName = bookNameRef.current.value;
    const isbnNumber = isbnNumberRef.current.value;
    const author = authorRef.current.value;
    const genres = genresRef.current.value;
    const totalCopies = totalCopiesRef.current.value;
    const copiesForCheckout = copiesForCheckoutRef.current.value;
    const image = imageRef.current.value;

    const details = {
      bookName,
      isbnNumber,
      author,
      genres,
      totalCopies,
      copiesForCheckout,
      image,
    };

    axios({
      method: "post",
      url: "/book/addbooks",
      data: details,
    })
      .then((response) => {
        if (response.data) {
          navigate("/home");
        } else {
          alert("Failed!!!");
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };
  return (
    <div>
      <div className="center" style={{ height: "627px", top: "55%" }}>
        <h1>Add Books</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input type="text" required ref={bookNameRef} />
            <label>Book Name</label>
          </div>
          <div className="txt_field ">
            <input type="text" required ref={isbnNumberRef} />
            <label>ISBN No</label>
          </div>
          <div className="txt_field">
            <input type="text" required ref={authorRef} />
            <label>Author</label>
          </div>
          <div className="txt_field">
            <input type="text" required ref={genresRef} />
            <label>Genres</label>
          </div>
          <div className="txt_field">
            <input type="number" required ref={totalCopiesRef} />
            <label>Total No of Copies</label>
          </div>
          <div className="txt_field">
            <input type="number" required ref={copiesForCheckoutRef} />
            <label>No of Copies available for checkout</label>
          </div>
          <div className="txt_field">
            <input type="text" required ref={imageRef} />
            <label>Image</label>
          </div>
          <input type="submit" value="Add"></input>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
