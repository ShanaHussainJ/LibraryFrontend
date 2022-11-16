import axios from "../../../axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ViewBooks.css";

const ViewBooks = () => {
  // Fetch data from Backend and view all books
  const [books, setBooks] = useState([]);
  const [newData, setNewData] = useState();

  const navigate=useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("isLoggedIn"))
    navigate("/")
  }, [])

  useEffect(() => {
    axios
      .get("/book/viewallbooks")
      .then((response) => {
        if (response.data) setBooks(response.data);
        else alert("no books");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [newData]);

  //Delete Books
  const handleDelete = (bookId) => {
    const confirmDelete = window.confirm("Do you want to delete?");
    if (!confirmDelete) return;
    axios
      .delete(`/book/deletebook/${bookId}`)
      .then((response) => {
        console.log(response);
        setNewData(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <Link to={"/addbooks"} className="btn btn-success addbutton">
          Add Book
        </Link>
      </div>
      <table className="table mt-4 text-center">
        <thead>
          <tr style={{ fontSize: "17px" }}>
            <th className="align-middle" scope="col">
              Book Id
            </th>
            <th className="align-middle" scope="col">
              Book Name
            </th>
            <th className="align-middle" scope="col">
              Author
            </th>
            <th className="align-middle" scope="col">
              Genres
            </th>
            <th className="align-middle" scope="col">
              ISBN No
            </th>
            <th className="align-middle" scope="col">
              Image
            </th>
            <th className="align-middle" scope="col" style={{ width: "10px" }}>
              Total No of copies
            </th>
            <th className="align-middle" scope="col" style={{ width: "10px" }}>
              No of copies available for Checkout
            </th>
            <th className="align-middle" scope="col" style={{ width: "197px" }}>
              Edit/Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((value) => (
            // unique id
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.bookName}</td>
              <td>{value.author}</td>
              <td>{value.genres}</td>
              <td>{value.isbnNumber}</td>
              <td>
                <img
                  className="imgsize rounded-circle"
                  src={value.image}
                  alt="img"
                />
              </td>
              <td>{value.totalCopies}</td>
              <td>{value.copiesForCheckout}</td>
              <td>
                <Link
                  to={`/editbook/${value.id}`}
                  className="btn btn-primary"
                  style={{ width: "74px" }}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger ml-1"
                  style={{ width: "74px" }}
                  onClick={() => handleDelete(value.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBooks;
