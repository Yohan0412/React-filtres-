import React from 'react';

function Card({ data }) {
  return (
    <div className="card">
      <img src={data.image}></img>
      <li>{data.name}</li>
      <li>{data.couleur}</li>
    </div>
  );
}

export default Card;
