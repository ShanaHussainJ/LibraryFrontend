import React from "react";
import "../Cards/card.css";
import Components from "./Components";
const Cards = (props) => {
  return (
      <div className="container mt-10 pt-5" style={{marginTop:"30px"}}>
        <div className="row">
        {props.details.map((value)=>{
          return <Components details={value} key={value.id}/>
        }
          )}
          
        
        </div>
        
      </div>
  );
}

export default Cards;
