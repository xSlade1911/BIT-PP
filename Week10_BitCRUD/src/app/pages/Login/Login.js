import React from "react";
import Title from "../../components/Title/Title";
import FormTitle from "../../components/FormTitle/FormTitle";
import Input from "../../components/Input/Input";
import Checkbox from "../../components/CheckBox/CheckBox";
import Button from "../../components/Button/Button";
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  } /*
  onEmailChange = event => {};
  onSubmit = () => {};*/

  render() {
    return (
      <div className="container">
        <div className="row">
          <Title text={"Login"} />
          <FormTitle title={"Sign in"} />
        </div>

        <div className="row">
          <Input cols={12} type={"email"} label={"Email Address *"} />
          <Input cols={12} type={"password"} label={"Password *"} />
        </div>
        <div className="row">
          <Checkbox children={"Remember me."} />
        </div>
        <div className="row">
          <Button text={"SIGN IN"} />
        </div>
        <div className="row">
          {/* <div className="col s6"> */}
          <p><Link to="/">Forgot password?</Link></p>
          <p><Link to="/">Don't have an account? Sign up.</Link></p>
          <br />
          {/* </div> */}

        </div>
      </div>
    );
  }
}
export default Login;
