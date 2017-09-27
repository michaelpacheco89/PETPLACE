import React, {Component} from "react";
import helper from "../config/helper";
import Signup from "../components/signup.js";
import ShelterSignup from "../components/shelsignup.js";

class Login extends Component
{
  constructor()
  {
    super();
    this.state = {
      email: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleInputChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleButtonClick()
  {
    console.log("button click");
    helper.validateUser(this.state.email, this.state.password)
    .then(data => {
      //if no email is found
      if(data.data.email)
      {
        console.log("no email");
        alert("user email does not exist");
        this.setState({email: "", password: ""});
      }
      else
      {
        this.setState({email: "", password: ""});
      }
    });
  }

  render()
  {
    return (
    <div>
        <div className="row">
            <form className="col s12 l5 offset-l3">
                <div>
                    <h5> Sign In </h5>

                    <div className="input-field">
                        <input value={this.state.email} onChange={this.handleInputChange} id="email" type="email" className="validate"/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>

                <div>
                    <div className="input-field">
                        <input value={this.state.password} onChange={this.handleInputChange} id="password" type="password" className="validate"/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>

                <button className="btn btn-default" onClick={this.handleButtonClick}>Submit</button>
            </form>
        </div>
        <div className="row">
            <div className="col s12 l4 offset-l2">
                <Signup />
            </div>
            <div className="col s12 l4">
                <ShelterSignup />
            </div>
        </div>
    </div>
    );
  }
}

export default Login;
