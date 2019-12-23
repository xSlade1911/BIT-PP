import React from "react";
import CheckBox from "../Checkbox/CheckBox";
import Button from "../Button/Button";

const Main = () => {
  return (
    <div>
      <CheckBox
        onChange={setTimeout(function() {
          alert("Hello");
        }, 3000)}
        children={"hbabdhdbasjd"}
      />
      <Button
        text={"Sign In"}
        onClick={function() {
          alert("Hello, I'm Button!");
        }}
      />
    </div>
  );
};
export default Main;
