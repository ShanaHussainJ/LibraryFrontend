import React from "react";
import "../Styles/card.css";
const Cards = (props) => {
  return (
    <section>
      <div className="container mt-10 pt-5">
        
        <div class="row">
        {props.details.map((value,index)=>(
          <div class="col-md-3 ml-5">
            <div class="card card-style">
              <div class="img"><img
                class="card-img-top"
                src={value.img}
                alt="Card image cap"
              ></img></div>
              <div class="card-body">
                <h5 class="card-title">{value.title}</h5>
                <p>ISBN NO - {value.ISBNNo}</p>
                <p class="card-text">
                Author - {value.author}</p>
                <p>Genres - {value.Genres}</p>
                <a href="#" class="btn btn-primary">
                  Add
                </a>
              </div>
            </div>
          </div>
          ))}
          
        
        </div>
        
      </div>
    </section>
  );
}

export default Cards;
