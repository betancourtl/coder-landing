import React from 'react';

const ListItem = props => {
  return (
    <div className="list-item-1">
      <img src={props.icon} alt="" />
      <h5>{props.title}</h5>
      <p>{props.description}</p>
    </div>
  );
};

export default ListItem;