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
      <table className="table mt-4 text-center">
        <thead >
        
          <tr  style={{fontSize:"17px"}}>
            <th class="align-middle" scope="col">Book Id</th>
            <th class="align-middle" scope="col">Book Name</th>
            <th class="align-middle" scope="col">Author</th>
            <th class="align-middle" scope="col">Genres</th>
            <th class="align-middle" scope="col">ISBN No</th>
            <th class="align-middle" scope="col">Image</th>
            <th class="align-middle" scope="col" style={{width:"10px"}}>Total No of copies</th>
            <th class="align-middle" scope="col" style={{width:"10px"}}>No of copies available for Checkout</th>
            <th class="align-middle" scope="col">Edit/Delete</th>
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
            <td>
              <Link to={`/editbook/${value.id}`} className="btn btn-primary" style={{width:"74px"}}>Edit</Link>
              <Link className="btn btn-danger ml-1" style={{width:"74px"}}>Delete</Link>
              </td>
          </tr>
         ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBooks;
