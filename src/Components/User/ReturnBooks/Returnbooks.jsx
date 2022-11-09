import React from "react";
import Returndata from "./Returndata";

function Returnbooks() {
  return (
    <div className="container">
      <div className="row">
        <table className="table mt-4 text-center">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Book Id</th>
              <th scope="col">Book Name</th>
              <th scope="col">ISBN No</th>
              <th scope="col">Issue Date</th>
              <th scope="col">Due Date</th>
              <th scope="col">Return Date</th>
            </tr>
          </thead>
          <tbody>
            {Returndata.map((props) => {
              return (
                <tr>
                  <td>{props.id}</td>
                  <td>{props.title}</td>
                  <td>{props.ISBNNo}</td>
                  <td>{props.issuedate}</td>
                  <td>{props.duedate}</td>
                  <td>
                    {props.returndate ? (
                      props.returndate
                    ) : (
                      <button className="btn btn-info " style={{backgroundColor:"#212529",marginleft:" 9px"}}>Return Book</button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Returnbooks;
