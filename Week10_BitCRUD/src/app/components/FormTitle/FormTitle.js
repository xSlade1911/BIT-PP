import React from "react";
import "./FormTitle.css";

const FormTitle = props => {
  return (
    <div className="formTitle">
      <i id="icons" className="medium material-icons">
        lock_outline
      </i>
      <h3>{props.title}</h3>
    </div>
  );
};
export default FormTitle;
