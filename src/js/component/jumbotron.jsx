import React from "react";

function Jumbotron(){
    return <div className="bg-light text-black p-5 mb-4 rounded-3">
    <div className="container-fluid py-5">
      <h1 className="display-5 fw-bold">A warm welcome!</h1>
      <p className="col-md-8 fs-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facere distinctio voluptates quia officiis unde nobis neque veniam hic. Sequi totam laudantium, velit a quaerat deleniti blanditiis facere reiciendis cumque!
      </p>
      <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
    </div>
  </div>
}

export default Jumbotron;