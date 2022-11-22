import axios from "../../../axios";
import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditBooks() {
  const [book, setBook] = useState();
  const { bookId } = useParams();
  

  const navigate=useNavigate();

  useEffect(() => {
    axios
      .get(`/book/getbook/${bookId}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.log(error));
  }, []);

  const bookNameRef = useRef();
  const isbnNumberRef = useRef();
  const authorRef = useRef();
  const genresRef = useRef();
  const totalCopiesRef = useRef();
  const copiesForCheckoutRef = useRef();
  const imageRef = useRef();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const bookName = bookNameRef.current.value;
    const isbnNumber = isbnNumberRef.current.value;
    const author = authorRef.current.value;
    const genres = genresRef.current.value;
    const totalCopies = totalCopiesRef.current.value;
    const copiesForCheckout = copiesForCheckoutRef.current.value;
    const image = imageRef.current.value;

    console.log(bookName);

    const details = {
      bookName,
      isbnNumber,
      author,
      genres,
      totalCopies,
      copiesForCheckout,
      image,
    };
    console.log(details);
    if (copiesForCheckout <= totalCopies){
    axios({
      method: "put",
      url: `/book/editbooks/${bookId}`,
      data: details,
    })
      .then((response) => {
        console.log(response);
        if (response.data) {
          alert("Edited Successfully");
          navigate("/viewbooks");
        } else {
          alert("Failed!!!");
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });}
      else{
        alert("CopiesForCheckout must me smaller than totalcopies");
      }
  };

  return (
    <div className="center" style={{ height: "627px", top: "55%" }}>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="txt_field ">
          <input
            type="text"
            id="bookName"
            required
            defaultValue={book?.bookName}
            ref={bookNameRef}
          />
          <label htmlFor="bookName">Book Name</label>
        </div>
        <div className="txt_field">
          <input
            type="text"
            required
            defaultValue={book?.isbnNumber}
            ref={isbnNumberRef}
          ></input>
          <label>ISBN No</label>
        </div>
        <div className="txt_field">
          <input
            type="text"
            required
            defaultValue={book?.author}
            ref={authorRef}
          ></input>
          <label>Author</label>
        </div>
        <div className="txt_field">
          <input
            type="text"
            required
            defaultValue={book?.genres}
            ref={genresRef}
          ></input>
          <label>Genres</label>
        </div>
        <div className="txt_field">
          <input
            type="number"
            required
            defaultValue={book?.totalCopies}
            ref={totalCopiesRef}
          ></input>
          <label>Total No of Copies</label>
        </div>
        <div className="txt_field">
          <input
            type="number"
            required
            defaultValue={book?.copiesForCheckout}
            ref={copiesForCheckoutRef}
          ></input>
          <label>No of Copies available for checkout</label>
        </div>
        <div className="txt_field">
          <input
            type="text"
            required
            defaultValue={book?.image}
            ref={imageRef}
          ></input>
          <label>Image</label>
        </div>
        <input type="submit" value="Done"></input>
      </form>
    </div>
  );
}
export default EditBooks;
