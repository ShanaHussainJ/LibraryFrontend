import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "../Cards/card.css";
import Components from "./Components";
import moment from "moment";
import { useNavigate } from "react-router-dom";


const Cards = () => {
  const [books, setBooks] = useState([]);   //Display all books in card
  const [userDetails, setUserDetails] = useState();
  const [checkoutLimit, setCheckoutLimit] = useState(false);
  const [updateData, setUpdateData] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);

  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if(!localStorage.getItem("isLoggedIn") )
    navigate("/")
  }, [])

  //Display all books in card
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

    // Fetching user details
    axios.get(`/user/getuser/${userId}`).then((response) => {
      if (response.data) {
        setUserDetails(response.data);
        setCheckoutLimit(response.data.order.length > 1);

        const dateNow = moment(new Date());

        response.data.order.forEach((element) => {
          const issueDate = moment(element.date);
          if (dateNow.diff(issueDate, "days") > 14) {
            setWarningMessage(true);
          }
        });
      }
    });
  }, [updateData]);
  console.log("first", updateData);

  return (
    <div className="container mt-10 pt-5" style={{ marginTop: "30px" }}>
      {warningMessage && (
        <div className="alert alert-danger alertmsg">
          Your Due date exceeds.Please return back the book.
        </div>
      )}
      {checkoutLimit && (
        <div className="alert alert-danger alertmsg">
          Your Limit exceeds.Please return back the book.
        </div>
      )}
      <div className="row">
        {books.map((value) => {
          return (
            <Components
              details={value}
              key={value.id}
              checkoutLimit={checkoutLimit}
              warningMessage={warningMessage}
              setUpdateData={() => setUpdateData(!updateData)}
              userDetails={userDetails}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
