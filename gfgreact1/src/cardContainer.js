import React from 'react';
import './CardContainer.css';


const CardContainer = ({title,desc}) => {
    
  return (
    <div className="card-container">
      <div className="card">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default CardContainer;