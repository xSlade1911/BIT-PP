import React from "react";
import Title from "../../components/Title/Title";
import FormTitle from "../../components/FormTitle/FormTitle";
import Input from "../../components/Input/Input";
import "./Register.css";
import Checkbox from "../../components/CheckBox/CheckBox";
import Button from "../../components/Button/Button";
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Title text={"Register"} />
          <FormTitle title={"Sign up"} />
        </div>

        <div className="row">
          <Input cols={12} type={"text"} label={"First Name *"} />
          <Input cols={12} type={"text"} label={"Last Name *"} />
        </div>

        <div className="row">
          <Input cols={12} type={"email"} label={"Email Address *"} />
          <Input cols={12} type={"password"} label={"Password *"} />
        </div>
        <div className="row">
          <Checkbox
            children={
              "I want to receive inspiration, marketing promotions and updates via email."
            }
          />
        </div>
        <div className="row">
          <Button text={"SIGN UP"} />

        </div>
        <div className="row">
          <p><Link to="/login">Already have an account? Log in.</Link></p>
        </div>
        <br />
      </div>
    );
  }
}
export default Register;
