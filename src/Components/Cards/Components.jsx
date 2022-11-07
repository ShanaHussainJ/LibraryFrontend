import React from 'react'

function Components({details}) {
  return (
    <div className="col-md-3 ml-5">
            <div className="card card-style">
              <div className="img"><img
                className="card-img-top"
                src={details.img}
                alt="Card image cap"
              ></img></div>
              <div className="card-body">
                <h5 className="card-title">{details.title}</h5>
                <p style={{ fontSize: "15px" }}>ISBN NO - {details.ISBNNo}</p>
                <p className="card-text">
                Author - {details.author}</p>
                <p>Genres - {details.Genres}</p>
                <a href="#" className="btn btn-primary">
                  Add
                </a>
              </div>
            </div>
          </div>
  )
}

export default Components