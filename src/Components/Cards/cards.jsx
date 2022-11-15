import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "../Cards/card.css";
import Components from "./Components";
const Cards = () => {
  const [books, setBooks] = useState([]);

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
  }, []);
  return (
    <div className="container mt-10 pt-5" style={{ marginTop: "30px" }}>
      <div className="row">
        {books.map((value) => {
          return <Components details={value} key={value.id} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
