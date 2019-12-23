import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

const Input = props => {
  return (
    <div className={`col s${props.cols}`}>
      <label>
        {props.label}
        <input type="text" className="validate" />
      </label>
    </div>
  );
};

Input.defaultProps = {
  cols: 12
};

Input.propTypes = {
  cols: PropTypes.number
};

export default Input;
