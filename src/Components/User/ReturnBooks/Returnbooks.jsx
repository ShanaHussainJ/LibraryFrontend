import axios from "../../../axios";
import React, { useEffect, useState } from "react";
import ReturnComponents from "./ReturnComponents";
import { useNavigate } from "react-router-dom";
function Returnbooks() {
  const [orders, setOrders] = useState([]);
  const [update, setUpdate] = useState(false);

  const navigate=useNavigate();

  useEffect(() => {
    if(!(localStorage.getItem("userRole")==="user") )
    navigate("/")
  }, [])

  useEffect(() => {
    axios
      .get(`/user/getuser/${localStorage.getItem("userId")}`)
      .then((response) => {
        if (response.data){ 
          setOrders(response.data.order)  
        };
      })
      .catch((error) => {
        console.log(error);
      });
  }, [update]);

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
              <th scope="col">Return Book</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((book) => {
              return <ReturnComponents book={book} key={book.checkoutBookId} update={()=>setUpdate(!update)}/>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Returnbooks;
