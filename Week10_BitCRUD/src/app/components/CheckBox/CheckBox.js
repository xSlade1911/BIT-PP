import React from "react";

const CheckBox = props => {
  return (
    <form action="#">
      <p>
        <label>
          <input type="checkbox" onChange={props.onChange} />
          <span>{props.children}</span>
        </label>
      </p>
    </form>
  );
};

export default CheckBox;
