import React from "react";

const Card = () => {
  return (
    <>
      <div className="card w-75 m-auto mt-3">
        <div className="card-header">Recipes</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
