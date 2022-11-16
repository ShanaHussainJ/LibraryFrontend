import axios from "../../axios";
import React, { useEffect, useState } from "react";
// details of book
function Components({ details, checkoutLimit, setUpdateData, userDetails, warningMessage }) {

  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    userDetails?.order.forEach((cart) => {
      if (cart.checkoutBookId === details.id) {
        setDisableButton(true);
      }
    });
  }, [userDetails]);


  const userId = localStorage.getItem("userId");


  const handleClick = () => {
    let text = "Are you wish to checkout this item?";
    if (window.confirm(text) === true) {
      axios
        .put(`/user/checkout/${userId}/${details.id}`)
        .then((response) => {
          setUpdateData();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    } else {
      alert("Failed");
    }
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
            <button className="btn btn-primary" onClick={handleClick} disabled={(localStorage.getItem("userRole")==="admin") || checkoutLimit || disableButton || warningMessage} >
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
