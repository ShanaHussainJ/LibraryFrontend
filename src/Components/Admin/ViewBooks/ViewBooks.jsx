import React from "react";
import "./ViewBooks.css"
import {Link} from 'react-router-dom'

const ViewBooks = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Link to={'/addbooks'} className="btn btn-success ml-auto ">
          Add Book
        </Link>
      </div>
      <table className="table mt-4">
        <thead >
        
          <tr>
            <th scope="col">Book Id</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author</th>
            <th scope="col">Genres</th>
            <th scope="col">ISBN No</th>
            <th scope="col">Image</th>
            <th scope="col">Total No of copies</th>
            <th scope="col">No of copies available for Checkout</th>
            <th scope="col">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
        {props.details.map((value)=>(
          <tr>
          
            <td>{value.id}</td>
            <td>{value.title}</td>
            <td>{value.author}</td>
            <td>{value.Genres}</td>
            <td>{value.ISBNNo}</td>
            <td><img className="imgsize rounded-circle" src={value.img} alt="" /></td>
            <td>{value.Copies}</td>
            <td>{value.Availforcheckout}</td>
          </tr>
         ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBooks;
