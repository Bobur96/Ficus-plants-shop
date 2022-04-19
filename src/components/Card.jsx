import React from "react";
import img from "../assets/images/product/medium-size/1-4-270x300.jpg";

function Card(props) {
  return (
    <div className="col py-2">
      <div className="card">
        <img src={img} className="card-img-top" alt="flower" />
        <div className="card-body px-4">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-text d-flex justify-content-between">
            <h5 className="text-success">{props.price}</h5>
            <h5 className="text-danger">{props.quantity}</h5>
          </div>
          <strong>{props.region}</strong> <span>{props.district}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
