import React from "react";

function Cards({ imgUrl }) {
  return (
    <div className="col">
      <div className="card">
        <img
          src={imgUrl} 
          className="card-img-top"
          alt="Card image"
        ></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text" style={{ fontSize: "10px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolorum nihil harum voluptates quod, in
            magnam fuga dignissimos saepe maiores placeat tenetur ipsa nemo similique voluptatibus illo nostrum,
            accusamus exercitationem.
          </p>
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
