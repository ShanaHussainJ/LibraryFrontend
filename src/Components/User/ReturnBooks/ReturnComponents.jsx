import axios from "../../../axios";
import React, { useEffect, useState } from "react";

function ReturnComponents({ book }) {
  const [bookDetails, setBookDetails] = useState();

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

  return (
    <tr>
      <td>{bookDetails?.id}</td>
      <td>{bookDetails?.bookName}</td>
      <td>{bookDetails?.isbnNumber}</td>
      <td>{book.date}</td>
      <td>{bookDetails?.duedate}</td>
      <td>
        <button
          className="btn btn-info "
          style={{ backgroundColor: "#212529", marginleft: " 9px" }}
        >
          Return Book
        </button>
      </td>
    </tr>
  );
}

export default ReturnComponents;
