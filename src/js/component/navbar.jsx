import React from "react";

function Navbar(){
    return  <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container">
      <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
      <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon bg-white"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
}

export default Navbar;