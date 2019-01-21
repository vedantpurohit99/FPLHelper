import React from "react"

const Selector = (props) => (
  <div>
    <form onSubmit={props.setPlayer}>
      <div className="form-group">
        <input className="card lead text input-group mb-3 shadow-sm" type="text" name="firstName" placeholder="First Name..."/>
      </div>
      <div className="form-group">
        <input className="card lead text input-group mb-3 shadow-sm" type="text" name="lastName" placeholder="Last Name..."/>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <button className="btn btn-outline-light btn-sm">Get Player Data</button>
        </div>
      </div>
    </form>
    { props.error && <p>{ props.error }</p> }
  </div>
);

export default Selector;
