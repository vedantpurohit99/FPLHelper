import React from "react";

const Selected = (props) => (
  <div>
    <p className="form-group lead text-light">{props.fName} {props.lName}</p>
    <button className="form-group btn btn-outline-light btn-sm" onClick={props.reset}>Reset Player</button>
    <div className="form-group">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" onChange={ props.setActive } />
        <label className="form-check-label text-light">
          Active
        </label>
      </div>
    </div>
  </div>
);

export default Selected;
