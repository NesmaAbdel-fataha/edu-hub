import React from "react";

function Card({ img, title, desc }) {
  return (
    <div className="card h-100">
    <div className="St-size"> { <img src={img} className="card-img-top " alt={title} />}</div> 
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
