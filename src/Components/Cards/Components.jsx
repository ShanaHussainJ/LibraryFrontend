import axios from "../../axios";
import React, { useEffect, useState } from "react";

function Components({ details }) {
  const [userDetails, setUserDetails] = useState();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`/user/getuser/${userId}`)
      .then((response) => {
        setUserDetails(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (event) => {
    let text = "Are you wish to checkout this item?";
    if (window.confirm(text) === true) {
      alert("Success");
      event.currentTarget.disabled = true;
    } else {
      alert("Failed");
    }

    axios
      .put(`/user/checkout/${userId}/${details.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };
  return (
    <div className="col-md-3 ml-5">
      <div className="card  card-style text-center">
        <div className="img">
          <img className="card-img-top" src={details.image} alt="img"></img>
        </div>
        <div className="card-body">
          <h5 className="card-title">{details.bookName}</h5>
          <p style={{ fontSize: "15px" }}>ISBN NO - {details.isbnNumber}</p>
          <p className="card-text">Author - {details.author}</p>
          <p>Genres - {details.genres}</p>
          {details.copiesForCheckout > 0 ? (
            <button className="btn btn-primary" onClick={handleClick}>
              Checkout
            </button>
          ) : (
            <p className="text-danger font-weight-bold">Out of Stock</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Components;
