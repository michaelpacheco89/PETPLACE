import React, { Component } from "react";

import helper from "../config/helper.js";

class Signup extends Component{
  constructor(){
   super();
   this.state = {
     first_name: "",
     last_name: "",
     user_name: "",
     email: "",
     password: "",
     confirmPassword: "",
     newUser: {}
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
      var userData = this.state.newUser;
      userData.name = this.state.first_name +" " +this.state.last_name;
      userData.username = this.state.user_name.trim();
      userData.email = this.state.email.trim();
      userData.password = this.state.password.trim();

      console.log(userData);
      helper.makeUser(userData);
  }
    else{
      alert("Passwords do not match");
    }
  }


  render(){
    return(
      <div className="row">
         <h5> Create a Personal Account </h5>
        <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate" onChange= {this.handleInputChange} />
            <label htmlFor="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate" onChange= {this.handleInputChange} />
            <label htmlFor="last_name">Last Name</label>
          </div>
      </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="user_name" type="text" className="validate" onChange= {this.handleInputChange} />
        <label htmlFor="user_name">Username</label>
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

export default Signup;
