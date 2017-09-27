import React, { Component } from "react";

import helper from "../config/helper.js";

class ShelterSignup extends Component{
  constructor(){
   super();
   this.state = {
     name: "",
     address: "",
     email: "",
     password: "",
     confirmPassword: "",
     newShelter: {}
   };
    //BIND this here to any child component
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }// closing constructor

  handleInputChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  handleSubmit() {
    if(this.state.password == this.state.confirmPassword){
      var userData = this.state.newShelter;
      userData.name = this.state.name.trim();
      userData.address = this.state.address.trim();
      userData.email = this.state.email.trim();
      userData.password = this.state.password.trim();

      console.log(userData);
      helper.makeShelter(userData);
  }
    else{
      alert("Passwords do not match");
    }
  }


  render(){
    return(
      <div className="row">
        <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input id="name" type="text" className="validate" onChange= {this.handleInputChange} />
            <label htmlFor="name">Shelter Name</label>
          </div>
        </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="address" type="text" className="validate" onChange= {this.handleInputChange} />
        <label htmlFor="address">Address</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="email" type="email" className="validate" onChange= {this.handleInputChange} />
        <label htmlFor="email">Email</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="password" type="password" className="validate" onChange= {this.handleInputChange} />
        <label htmlFor="password">Password Must Be 8-16 Character Long.</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="confirmPassword" type="password" className="validate" onChange= {this.handleInputChange} />
        <label htmlFor="confirmPassword">Confirm Password.</label>
      </div>
    </div>
    <button className="btn waves-effect waves-light" type="submit" onClick= {this.handleSubmit} name="action">Submit
    <i className="material-icons right">send</i>
  </button>
  </form>
</div>
    );
  }
}

export default ShelterSignup;
