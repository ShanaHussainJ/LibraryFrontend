import axios from "../../../axios";
import React, { useEffect, useState } from "react";


function ReturnComponents({ book, update }) {
  const [bookDetails, setBookDetails] = useState();
  
  // Get Books and display in return books table
  useEffect(() => {
    axios
      .get(`/book/getbook/${book.checkoutBookId}`)
      .then((response) => {
        setBookDetails(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Return Books
  const handleClick = () => {

    axios
      .put(`/user/returnbook/${localStorage.getItem("userId")}/${book.checkoutBookId}`)
      .then((response) => {
        console.log(response);
        update();
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };
  const date = book.date;
  const issueDate = date.split("T")[0];

  return (
    <tr>
      <td>{bookDetails?.id}</td>
      <td>{bookDetails?.bookName}</td>
      <td>{bookDetails?.isbnNumber}</td>
      <td>{issueDate}</td>
      <td>
        <button
          className="btn btn-info "
          onClick={handleClick}
          style={{ backgroundColor: "#212529", marginleft: " 9px" }}
        >
          Return Book
        </button>
      </td>
    </tr>
  );
}

export default ReturnComponents;
