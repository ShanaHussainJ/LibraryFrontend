import axios from "../../../axios";
import React, { useEffect, useState } from "react";
import ReturnComponents from "./ReturnComponents";

function Returnbooks() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`/user/getuser/${localStorage.getItem("userId")}`)
      .then((response) => {
        if (response.data) setOrders(response.data.order);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <table className="table mt-4 text-center">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Book Id</th>
              <th scope="col">Book Name</th>
              <th scope="col">ISBN No</th>
              <th scope="col">Issue Date</th>
              <th scope="col">Due Date</th>
              <th scope="col">Return Book</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((book) => {
              return <ReturnComponents book={book} key={book.checkoutBookId} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Returnbooks;
