import React from "react";

function Components({ details }) {
  const checkout = () => {
    if (window.confirm("Are you sure you wish to checkout this item?"))
      alert("Success")
    
  };
  return (
    <div className="col-md-3 ml-5">
      <div className="card  card-style text-center">
        <div className="img">
          <img className="card-img-top" src={details.img} alt="img"></img>
        </div>
        <div className="card-body">
          <h5 className="card-title">{details.title}</h5>
          <p style={{ fontSize: "15px" }}>ISBN NO - {details.ISBNNo}</p>
          <p className="card-text">Author - {details.author}</p>
          <p>Genres - {details.Genres}</p>
          {details.Availforcheckout > 0 ? (
            <button className="btn btn-primary" onClick={checkout}>
              Checkout
            </button>
          ) : (
            <p className="text-danger font-weight-bold">Currently Unavailable</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Components;
