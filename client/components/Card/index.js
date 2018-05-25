import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <img className="card-img" src={props.img} />
      <div className="card-text-wrapper">
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
