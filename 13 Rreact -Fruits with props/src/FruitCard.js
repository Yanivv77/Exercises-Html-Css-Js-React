import React from "react";

function FruitCard(props) {
  return (
    <div className="contact-card">
      <h3>{props.Contact.name}</h3>
      <img src={props.Contact.imgUrl} />
      <p>Vitamin c: {props.Contact.Vitamin} for 100g</p>
    </div>
  );
}

export default FruitCard;
