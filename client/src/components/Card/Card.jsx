import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New season</span>}
          <img src={item.img} alt="main" className="mainImg" />
          <img src={item.img2} alt="second" className="secondImg" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3 className="oldPrice">${item.oldPrice}</h3>
          <h3 className="price">${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
