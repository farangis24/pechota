import React from "react";

export const ProductCard = ({ img, title, des, price, id }) => {
  return (
    <div className="container">
      <s>{id}</s>
      <img src={img} alt="img" />
      <h1>{title}</h1>
      <p>{des}</p>
      <p>{price}</p>
    </div>
  );
};
